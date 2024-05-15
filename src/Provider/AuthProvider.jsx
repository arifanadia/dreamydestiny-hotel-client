import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    // signUp with Email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // onAuthState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            } else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser , {
                    withCredentials :true
                })
                  .then(res => {
                    console.log(res.data);
                  })
            }

            setLoading(false)
        });
        return () => {
            return unSubscribe()
        }
    }, [])
    // update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login with email
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // login with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    };

    const authInfo = { user, loading, updateUserProfile, createUser, setUser, logIn, logOut, signInWithGoogle, signInWithGitHub }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    )
};

export default AuthProvider;