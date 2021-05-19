import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GeneralScreen } from "../components/general/GeneralScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { UsScreen } from "../components/us/UsScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const isAuthenticated = false;
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/us" exact>
            <GeneralScreen component={UsScreen} />
          </Route>
          <Route path="/" exact>
            <GeneralScreen component={HomeScreen} />
          </Route>
          <Route
            path="/auth"
            component={(_) =>
              !isAuthenticated ? <AuthRouter /> : <Redirect to="/" />
            }
          />
          <PrivateRoute
            path="/profile"
            exact
            isAuthenticated={isAuthenticated}
            component={ProfileScreen}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
