import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login } from "../actions/auth";
import { GeneralScreen } from "../components/general/GeneralScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { UsScreen } from "../components/us/UsScreen";
import { AppSettings } from "../util/AppSeetings";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();
  
  // const isLoggedIn = false;
  
  const userData = useSelector(state=>state.auth);
  useEffect(() => {
    console.log('useeffect');
    if(localStorage.getItem(AppSettings.LOCAL_STORAGE.USER_DATA) && !Object.keys(userData).length){
      dispatch(login(JSON.parse(localStorage.getItem(AppSettings.LOCAL_STORAGE.USER_DATA))));
      setIsLoggedIn(true);
    }

    // if(!!Object.keys(userData).length){
    //   setIsLoggedIn(true);
    // }else{
    //   setIsLoggedIn(false);
    // }
    // console.log('login: ',isLoggedIn);
    // console.log('checking: ',checking);
    setChecking(false);
  }, [userData,setIsLoggedIn,dispatch,checking])
  
  console.log('----------------------------------------')
  console.log('loggedin: ',isLoggedIn);

  if(checking){
    return (
      <h1>Wait....</h1>
    )
  }

  console.log('llego aca');

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
              !isLoggedIn ? <AuthRouter /> : <Redirect to="/" />
            }
          />
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
