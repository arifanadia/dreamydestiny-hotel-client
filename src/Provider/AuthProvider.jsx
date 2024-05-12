import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const logOut = () => {
        return signOut(auth)
    };


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const authInfo = { user, createUser, setUser, logIn, logOut }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    )
};

export default AuthProvider;