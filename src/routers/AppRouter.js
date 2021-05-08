import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { NotFoundScreen } from "../components/404/NotFoundScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
            <HomeScreen/>
            </Route>
            <Route path="/auth">
            <AuthRouter/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    </Router>
  );
};
