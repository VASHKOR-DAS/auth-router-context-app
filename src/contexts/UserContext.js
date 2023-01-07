import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(); // AuthContext amader Context name

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Aakash' });

    // createUserWithEmailAndPassword(auth, email, password) method apply
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn method apply
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user jevabei(Google, Fb, etc etc diye) login/register (means, auth er state change hole ata ai place theke track korbe, r jehe2 ata bairer 1ta jinish (amader nijosso kono function na) tai ata API er moto useEffect er moto call korbo, jeno generally authState change korle (user login, registered, signOut) onAuthStateChanged amader change ta set kore dibe )
    //dependency useEffect(() => { }, [])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])











    // auth Info er majhe userInfo holo property name, ai name tar majhe user er sob info jekhane khusi ai property name diye access kora jabe, userInfo means this object { displayName: 'Aakash' }

    /* obj short hand, 
    const a = '55'
    const b = 'abc'
    const obj = {a, b} 
    console.log(obj) //its return {a: '55', b: 'abc'}
    */
    const authInfo = { user, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;