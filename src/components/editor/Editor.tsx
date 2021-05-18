import React, {useState} from 'react';
import MonacoEditor from "react-monaco-editor";

type EditorProps = {
    code: string,
    onChange: (code: string) => void
    readOnly?: boolean
}

export default function Editor(props: EditorProps) {

    return <MonacoEditor
        height={`100%`}
        language="javascript"
        theme="vs-dark"
        value={props.code}
        onChange={props.onChange}
        options={{
            readOnly: props.readOnly,
            domReadOnly: true
        }}
    />
}
