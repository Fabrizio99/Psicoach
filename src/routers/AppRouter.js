import React from "react";
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { Navbar } from "../components/general/Navbar";
import { Footer } from "../components/general/Footer";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
            <HomeScreen/>
            </Route>
            <Route path="/auth">
            <AuthRouter/>
            </Route>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};
