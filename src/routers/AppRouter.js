import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/auth/login">login</Link>
            </li>
            <li>
              <Link to="/auth/register">register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <HomeScreen/>
          </Route>
          <Route path="/auth">
            <AuthRouter/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
