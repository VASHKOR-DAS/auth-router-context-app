import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({ children }) => {

    // user (er ki ki info check krbo ta) ase naki nai check krbo
    const { user } = useContext(AuthContext);

    // user & user er uid jodi thake tahole PrivateRoute er children jara thakbe tader access korte dibo
    if (user && user.uid) {
        return children;
    }

    // na thakle oi specific routes a gele login page a niye jabe
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;