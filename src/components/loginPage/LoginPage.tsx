import React, {useState} from 'react';
import styles from './LoginPage.module.css';
import {Redirect} from "react-router-dom";

function LoginPage() {
    return <div className={styles.container}>
        <button onClick={() => {
            window.location.href = "https://github.com/login/oauth/authorize?client_id=dccc71180b33504438e1";
        }}>Github</button>
    </div>
}

export default LoginPage;