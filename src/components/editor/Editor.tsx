import React, {useState} from 'react';
import MonacoEditor from "react-monaco-editor";

type EditorProps = {
    offset: number
}

export default function Editor(props: EditorProps) {
    const [code, setCode] = useState("");

    return <MonacoEditor
        height={`calc(100% - ${props.offset}px)`}
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={setCode}
    />
}
