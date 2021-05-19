import {useLocation} from 'react-router-dom';
import styles from './GithubLoginPage.module.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function GithubLoginPage() {
    const code = useQuery().get('code');

    // TODO use the code to authenticate with the server
    return <div className={styles.container}>
        {
            code ? code : "No code"
        }
    </div>
}

export default GithubLoginPage;