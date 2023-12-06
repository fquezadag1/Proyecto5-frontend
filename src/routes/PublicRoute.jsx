import React, { useContext, useEffect, useState } from 'react'

import { Route } from 'react-router-dom'

import { UserContext } from '../context/User/UserContext'

export function PublicRoute({ component: Component, ...props }) {

    const userCtx = useContext(UserContext)

    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            try {
                await verifyingToken();
                setLoading(false);

            } catch (error) {
                console.error("Error verifying token:", error);
                setLoading(false);
            }
        };

        fetchData();

    }, [authStatus])

    return (
        <Route {...props} render={props => {

            if (loading) return null

            return authStatus ?
                (<Component {...props} />)
                :
                (<Component />)
        }
        } />
    )
}
