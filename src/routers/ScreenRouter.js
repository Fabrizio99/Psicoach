import React from 'react';
import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";
import { Footer } from '../components/general/Footer'
import { Navbar } from '../components/general/Navbar'
import { HomeScreen } from '../components/home/HomeScreen';
import { UsScreen } from '../components/us/UsScreen';

export const ScreenRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="page-content">
            <Router>
                <Switch>
                        <Route path="/us" exact>
                            <UsScreen/>
                        </Route>
                        <Route path="/" exact>
                            <HomeScreen/>
                        </Route>
                        <Redirect to="/"/>
                </Switch>
            </Router>
            </div>
            <Footer/>
        </>
    )
}
