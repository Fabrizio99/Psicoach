import React from "react";
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <div>
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
    </div>
  );
};
