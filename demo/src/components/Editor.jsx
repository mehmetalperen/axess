import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { language, title, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <div className="Editor">
        <div className="editor-title-container">
          {title}
          <button>O/C</button>
        </div>

        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
      <style jsx>{`
        .Editor {
          flex-grow: 1;
          flex-basis: 0;
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          background-color: lightgray;
        }
        .editor-title-container {
          display: flex;
          justify-content: space-between;
          background-color: black;
          color: white;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
        }

        .CodeMirror {
          height: 100% !important;
        }
        .code-mirror-wrapper {
          flex-grow: 1;
          border-bottom-right-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
