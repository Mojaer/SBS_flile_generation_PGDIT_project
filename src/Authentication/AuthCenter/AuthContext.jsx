import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "./AuthApp";


// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null)

const AuthContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //log in to the website
    // eslint-disable-next-line no-unused-vars
    // const userRegistrations = (email, password, name, url) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    const userRegistrations = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //log in to the website
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut from the website
    const userLogout = () => {
        return signOut(auth)
    }

    // add name and image url to the account
    const profileUpdate = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name || 'no name', photoURL: url || 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'
        })
    }

    // user Management 
    useEffect(() => {
        const unRegister = onAuthStateChanged(auth, (subscriber) => {
            setUser(subscriber)
            setLoading(false)

        })
        return () => {
            unRegister()
        }
    }, [auth])


    const userInfo = {
        user, loading,
        userRegistrations,
        userLogin,
        profileUpdate,
        userLogout
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;