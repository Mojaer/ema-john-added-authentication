import React, { useContext } from 'react';
import { authContext } from '../components/Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    // console.log(location)

    const { user, loading } = useContext(authContext);
    if (loading)
        return <progress className="progress w-56"></progress>


    if (user) {
        return children
    }
    else {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }




};

export default PrivateRoute;