import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Editor from "./components/editor/Editor";
import axios from 'axios';

function App() {
    const [token, setToken] = useState("");
    const [code, setCode] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        axios.post('/api/auth')
            .then(res => {
                setToken(res.data);
            });
    }, []);

    return <div className={styles.container}>
        <div className={styles.topBar}>
            <button disabled={!token} onClick={() => {
                axios.post('/api/exec', {
                    language: 'javascript',
                    code
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(res => {
                    setResult(res.data.combinedOutput)
                })
            }}>Run</button>
            <button>Sign In</button>
        </div>
        <div className={styles.main}>
            <Editor code={code} onChange={setCode}/>
            <Editor code={result} onChange={() => {}} readOnly={true}/>
        </div>
    </div>
}

export default App;
