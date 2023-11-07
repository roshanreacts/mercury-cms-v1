
import React, { useEffect, useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

function JsonPopup({ isVisible, onClose, initialData, edit }) {
  const [jsonData, setJsonData] = useState(initialData || {});

  const handleJsonChange = (newJson) => {
    setJsonData(newJson.json);
    console.log("sdsfvcsdsf");
  };

  return (
    <div className="bg-white p-4 border rounded shadow-lg z-10 w-[100%]">
      <JSONInput
        id="json-editor"
        placeholder={jsonData}
        onChange={handleJsonChange}
        confirmGood={true}
        locale={locale}
        width="100%"
        theme="light_mitsuketa_tribute"
      />

    </div>
  );
}

export default JsonPopup;
