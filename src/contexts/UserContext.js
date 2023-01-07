import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(); // AuthContext amader Context name

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Aakash' });

    // auth Info er majhe userInfo holo property name, ai name tar majhe user er sob info jekhane khusi ai property name diye access kora jabe, userInfo means this object { displayName: 'Aakash' }
    const authInfo = { user: user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;