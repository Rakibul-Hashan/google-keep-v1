import React, { useRef, useState } from "react";
import "./custom.css";

const Textbox = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleInputChange = (e) => {
    setEditorContent(e.target.innerHTML);
  };

  const handleFormat = (format) => {
    let updatedContent = editorContent;
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const wrapper = document.createElement(format);

      if (format === "a") {
        const url = prompt("Enter the URL:", "http://");
        if (url) {
          wrapper.href = url;
          wrapper.textContent = selection.toString();
        }
      } else {
        wrapper.textContent = selection.toString();
      }

      range.deleteContents();
      range.insertNode(wrapper);
      updatedContent = range.commonAncestorContainer.innerHTML;
    }

    setEditorContent(updatedContent);
  };
  return (
    <div>
      <div className="toolbar">
        <button onClick={() => handleFormat("b")}>Bold</button>
        <button onClick={() => handleFormat("i")}>Italic</button>
        <button onClick={() => handleFormat("u")}>Underline</button>
        <button onClick={() => handleFormat("ul")}>Bullet List</button>
        <button onClick={() => handleFormat("ol")}>Numbered List</button>
        <button onClick={() => handleFormat("a")}>Link</button>
      </div>
      <div
        className="editor"
        contentEditable
        suppressContentEditableWarning
        onBlur={handleInputChange}
      >
        Start editing...
      </div>
    </div>
  );
};

export default Textbox;
