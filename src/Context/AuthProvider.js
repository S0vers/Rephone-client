import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'
import app from '../Firebase/firebase.config';

//create Auth Context
export const AuthContext = createContext();
const auth = getAuth(app);


//Auth Provider for the program
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    //Create user with Email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login in with Email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Sign in with Google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Set the current user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    //Logout the user
    const logout = () => {
        setLoading(true);
        localStorage.removeItem('accessToken')
        return signOut(auth);
    }

    //Loading current User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    //Sending all the methods
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logout,
        setLoading,
        googleSignIn,
        loading,
        user

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;