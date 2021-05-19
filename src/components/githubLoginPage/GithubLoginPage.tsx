import {Redirect, useLocation} from 'react-router-dom';
import styles from './GithubLoginPage.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function GithubLoginPage() {
    const [code, setCode] = useState("");
    const [redirectToHome, setRedirectToHome] = useState(false);
    const query = useQuery();

    useEffect(() => {
        setCode(query.get('code') || "");
    }, [query]);

    useEffect(() => {
        if(!code) {
            return;
        }
        axios.post('/api/auth/github', {
            'code': code
        }).then(res => {
            localStorage.setItem('apiKey', res.data);
            setRedirectToHome(true);
        })
    }, [code]);

    if(redirectToHome) {
        return <Redirect to="/"/>
    }

    return <div className={styles.container}>
        {
            code ? "" : "No code found."
        }
    </div>
}

export default GithubLoginPage;