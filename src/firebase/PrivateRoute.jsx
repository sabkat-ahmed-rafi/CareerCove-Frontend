import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    const location = useLocation();

    if(loading){
        return <span className="loading z-50 text-[#F31260] loading-bars loading-lg sticky top-[300px] left-[650px]"></span>
    }

    if(user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}/>

};

export default PrivateRoute;