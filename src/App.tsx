import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ExecutionPage from "./components/executionPage/ExecutionPage";


function App() {

    return <Router>
        <Switch>
            <Route exact path="/exec">
                <ExecutionPage/>
            </Route>
            <Route path="/">
                <Redirect to="/exec"/>
            </Route>
        </Switch>
    </Router>

}

export default App;
