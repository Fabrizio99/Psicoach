import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { GeneralScreen } from '../components/general/GeneralScreen'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={
                (props)=>(
                    (isAuthenticated)
                    ?
                        <GeneralScreen
                            component={Component}
                            {...props}
                        />
                    :
                        (<Redirect to="/auth/login"/>)
                )
            }
        />
    )
}
