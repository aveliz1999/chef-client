import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Editor from "./components/editor/Editor";
import axios from 'axios';

type Language = {
    name: string,
    fileExtension?: string,
    aliases: string[],
    image: string,
    command: string[]
}

function App() {
    const [token, setToken] = useState("");
    const [code, setCode] = useState("");
    const [result, setResult] = useState("");
    const [languages, setLanguages] = useState<Language[]>([]);
    const [language, setLanguage] = useState<Language>();

    useEffect(() => {
        axios.post('/api/auth')
            .then(res => {
                setToken(res.data);
            });
        axios.get('/api/exec/versions')
            .then(res => {
                setLanguages(Object.values(res.data));
            })
    }, []);

    return <div className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.topBarSection}>
                <select className={styles.languageSelector} onChange={(s) => {
                    setLanguage(languages[s.currentTarget.selectedIndex]);
                }}>
                    {
                        languages.map(language => <option value={language.name}>{language.name}</option>)
                    }
                </select>
            </div>
            <div className={styles.topBarSection}>
                <button disabled={!token} onClick={() => {
                    axios.post('/api/exec', {
                        language: language?.name,
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
        </div>
        <div className={styles.main}>
            <Editor language={language?.name.replaceAll(/\d/g, '') || ""} code={code} onChange={setCode}/>
            <Editor language="" code={result} onChange={() => {}} readOnly={true}/>
        </div>
    </div>
}

export default App;
