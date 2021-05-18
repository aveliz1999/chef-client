import React from 'react';
import styles from './App.module.css';
import Editor from "./components/editor/Editor";

function App() {
    return <div className={styles.container}>
        <div className={styles.topBar}>
            <button>Run</button>
            <button>Sign In</button>
        </div>
        <Editor offset={50}/>
    </div>
}

export default App;
