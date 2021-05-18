import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Editor from "./components/editor/Editor";
import axios from 'axios';

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        axios.post('/api/auth')
            .then(res => {
                setToken(res.data);
            });
    }, []);

    return <div className={styles.container}>
        <div className={styles.topBar}>
            <button disabled={!token}>Run</button>
            <button>Sign In</button>
        </div>
        <Editor offset={50}/>
    </div>
}

export default App;
