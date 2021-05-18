import React, {useState} from 'react';
import MonacoEditor from "react-monaco-editor";

function App() {
    const [code, setCode] = useState("");

    return <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={setCode}
    />
}

export default App;
