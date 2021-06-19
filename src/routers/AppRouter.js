import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login } from "../actions/auth";
import { disableRedirect } from "../actions/redirect";
import { GeneralScreen } from "../components/general/GeneralScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { LoadingScreen } from "../components/loading/LoadingScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { UsScreen } from "../components/us/UsScreen";
import { HttpRequest } from "../helpers/HttpRequest";
import { AppSettings, Services } from "../util/AppSeetings";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking]     = useState(true);
  const dispatch                    = useDispatch();
  const {auth, redirect: {allowed}} = useSelector(state=>state);

  const fetchProfile = token => HttpRequest.GET(Services.PROFILE,token);


  useEffect(() => {
    const token = localStorage.getItem(AppSettings.LOCAL_STORAGE.ID);
    if(token){
      fetchProfile(JSON.parse(token)).then(profile=>{
        dispatch(login({token,profile}));
        setIsLoggedIn(true);
        setChecking(false);
      })
    }else{
      setChecking(false);
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoggedIn(auth.token && auth.profile);
  }, [auth])

  useEffect(() => {
    if(allowed){
      dispatch(disableRedirect())
    }  
  }, [allowed,dispatch])
  
  if(checking){
    return <LoadingScreen/>
  }

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
          <Route path="/auth" render={() => !isLoggedIn ? <AuthRouter /> : <Redirect to="/" />} />
          <PrivateRoute
            path="/profile"
            exact
            isAuthenticated={isLoggedIn}
            component={ProfileScreen}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
