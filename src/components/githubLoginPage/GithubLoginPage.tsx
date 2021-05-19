import {useLocation} from 'react-router-dom';
import styles from './GithubLoginPage.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function GithubLoginPage() {
    const [code, setCode] = useState("");
    const query = useQuery();

    useEffect(() => {
        setCode(query.get('code') || "");
    }, []);

    useEffect(() => {
        if(!code) {
            return;
        }
        axios.post('/api/auth/github', {
            'code': code
        }).then(res => {
            // TODO handle the authentication response
            console.log(res.data);
        })
    }, [code]);

    // TODO use the code to authenticate with the server
    return <div className={styles.container}>
        {
            code ? code : "No code"
        }
    </div>
}

export default GithubLoginPage;