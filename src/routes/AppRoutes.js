import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../views/Login';
import DashboardRoutes from './DashboardRoutes';
import injectContext, { Context } from '../store/appContext';
import { useContext } from 'react';

const AppRoutes = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.isAuth()
    }, [actions])

    return (
        <BrowserRouter>
            <Switch>
                {
                    !store.isAuth ? (
                        <>
                            <Route exact path="/login" component={Login} />
                            <Redirect to='/login' />
                        </>
                    ) : (
                            <Route path="/" component={DashboardRoutes} />
                        )
                }
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(AppRoutes);