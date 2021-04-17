import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [javascript, setJs] = useState("");
  const [css, setCss] = useState("");

  const scrCode = `
  <html>
    <body>${html}</body>
    <style> ${css}</style>
    <script> ${javascript}</script>
    </html>
  `;

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
          srcDoc={scrCode}
          title="output"
          sandbox="allow-scripts"
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
