import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(); // AuthContext amader Context name

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Aakash' });

    // createUserWithEmailAndPassword(auth, email, password) method apply
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }













    // auth Info er majhe userInfo holo property name, ai name tar majhe user er sob info jekhane khusi ai property name diye access kora jabe, userInfo means this object { displayName: 'Aakash' }

    /* obj short hand, 
    const a = '55'
    const b = 'abc'
    const obj = {a, b} 
    console.log(obj) //its return {a: '55', b: 'abc'}
    */
    const authInfo = { user, createUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;