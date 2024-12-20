import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleEmailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    const authInfo = {
        handleSignUp,
        handleEmailSignIn,
        handleGoogleSignIn,
        handleSignOut,
        manageProfile,
        user,
        setUser,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //console.log(currentUser)
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)

            return () => {
                unsubscribe()
            }
        })
    }, [])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    routes
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;