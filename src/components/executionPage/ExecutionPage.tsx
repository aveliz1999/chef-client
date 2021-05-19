import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./ExecutionPage.module.css";
import Editor from "../editor/Editor";
import {Redirect} from "react-router-dom";

type Language = {
    name: string,
    fileExtension?: string,
    aliases: string[],
    image: string,
    command: string[]
}

function ExecutionPage() {
    const [token, setToken] = useState("");
    const [code, setCode] = useState("Type your code here!");
    const [result, setResult] = useState("Code output goes here!");
    const [languages, setLanguages] = useState<Language[]>([]);
    const [language, setLanguage] = useState<Language>();
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const key = localStorage.getItem('apiKey');
        if(key) {
            setToken(key);
            setAuthenticated(true);
        }
        else {
            axios.post('/api/auth')
                .then(res => {
                    setToken(res.data);
                });
        }
        axios.get('/api/exec/versions')
            .then(res => {
                setLanguages(Object.values(res.data));
            })
    }, []);

    if(redirectToLogin) {
        return <Redirect to="/login"/>
    }

    return <div className={styles.container}>
        <div className={styles.topBar}>
            <select className={styles.languageSelector} onChange={(s) => {
                setLanguage(languages[s.currentTarget.selectedIndex - 1]);
            }}>
                <option value={""}>Select a Language</option>
                {
                    languages.map(language => <option value={language.name}>{language.name}</option>)
                }
            </select>
            {
                !authenticated &&
                <button className={styles.button} onClick={() => {
                    setRedirectToLogin(true);
                }}>Sign In</button>
            }
            <button className={styles.button} disabled={!token} onClick={() => {
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
        </div>
        <div className={styles.main}>
            <Editor language={language?.name.replaceAll(/\d/g, '') || ""} code={code} onChange={setCode}/>
            <Editor language="" code={result} onChange={() => {}} readOnly={true}/>
        </div>
    </div>
}

export default ExecutionPage;