import React, { useEffect, useRef, useState } from "react";
import Editor from "./Editor";
import useDebounce from "../hooks/useDebounce";

function Interface() {
  const [html, setHtml] = useState("");
  const [javascript, setJs] = useState("");
  const [css, setCss] = useState("");

  const [src, setSrc] = useState("");
  const debouncedSource = useDebounce(src, 1500);
  const touchedRef = useRef(false);

  useEffect(
    function () {
      if (!touchedRef.current) {
        touchedRef.current = true;
        const storedDataString = localStorage.getItem("editor-state");
        if (!storedDataString) return;
        try {
          const { javascript, html, css } = JSON.parse(storedDataString);
          setJs(javascript);
          setHtml(html);
          setCss(css);
        } catch (e) {}
      } else {
        localStorage.setItem(
          "editor-state",
          JSON.stringify({
            javascript,
            html,
            css,
          })
        );
      }
    },
    [debouncedSource]
  );

  useEffect(
    function () {
      setSrc(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${javascript}</script>
      </html>
      `);
    },
    [html, css, javascript]
  );

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" title="HTML" value={html} onChange={setHtml} />

        <Editor language="css" title="CSS" value={css} onChange={setCss} />
        <Editor
          language="javascript"
          title="Javascript"
          value={javascript}
          onChange={setJs}
        />
      </div>

      <div className="pane">
        <iframe
          srcDoc={debouncedSource || src}
          title="output"
          id="output"
          // sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <style jsx>
        {`
          .top-pane {
            background-color: gray;
          }
          .pane {
            height: 50vh;
            display: flex;
          }
        `}
      </style>
    </>
  );
}

export default Interface;
