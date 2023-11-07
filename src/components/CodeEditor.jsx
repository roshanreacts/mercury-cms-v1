"use client"
import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ initialComponents, edit, handleComponentEdit }) => {
  const [value, setValue] = useState(initialComponents || '');

  const handleEditorChange = (value) => {
    setValue(value);
    handleComponentEdit(value)
    console.log(value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl border-2 border-[#c0bebe] pt-1">
      <Editor
        height="350px"
        width={`100%`}
        language='json'
        value={value}
        theme={"hc-light"}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        options={{readOnly: !edit}}
      />
    </div>
  );
};
export default CodeEditorWindow;