import React, { useEffect, useRef, useState } from "react";
import Editor from "./Editor";
import { register } from "../lib";

function App() {
  const [html, setHtml] = useState("");
  const [javascript, setJs] = useState("");
  const [css, setCss] = useState("");

  const [src, setSrc] = useState("");
  const iframeRef = useRef();

  function saveSrc() {
    localStorage.setItem("src", src);
  }

  useEffect(function () {
    console.log("Calling register");
    register(`#output`);
  }, []);

  useEffect(function () {
    const storedSrc = localStorage.getItem("src");
    if (storedSrc) setSrc(storedSrc);
    return () => saveSrc();
  }, []);

  useEffect(
    function () {
      setSrc(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>${html}</body>
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
          srcDoc={src}
          ref={iframeRef}
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

export default App;
