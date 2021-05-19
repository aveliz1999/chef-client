import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ExecutionPage from "./components/executionPage/ExecutionPage";
import LoginPage from "./components/loginPage/LoginPage";
import GithubLoginPage from "./components/githubLoginPage/GithubLoginPage";


function App() {
    return <Router>
        <Switch>
            <Route exact path="/exec">
                <ExecutionPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/github">
                <GithubLoginPage/>
            </Route>
            <Route path="/">
                <Redirect to="/exec"/>
            </Route>
        </Switch>
    </Router>
}

export default App;
