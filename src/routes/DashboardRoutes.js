import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../views/Main';
import Profile from '../views/Profile';
import Navbar from '../components/Navbar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/planets" component={Main} />
                    <Route exact path="/planet/:id" component={Profile} />
                    <Redirect to="/planets" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
