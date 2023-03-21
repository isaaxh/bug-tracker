import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../components/firebase'
import { onAuthStateChanged, updateEmail, updateProfile, User } from "firebase/auth";

interface AuthProviderProps {
    children: React.ReactNode,
}

type authType = {
    signUp: ReturnType<typeof auth.createUserWithEmailAndPassword>,
    logIn: ReturnType<typeof auth.signInWithEmailAndPassword>,
}

type ProfileUpdateData = {
    displayName?: string | null,
    photoURL?: string | null,
}

interface AuthContextType {
    currentUser: any,
    signUp: (email: string, password: string) => authType["signUp"],
    logIn: (email: string, password: string) => authType["logIn"],
    logOut: () => Promise<void>,
    resetPassword: (email: string) => Promise<void> | undefined,
    updateEmailFn: (email: string) => Promise<void> | null,
    updatePasswordFn: (email: string) => Promise<void> | null,
    updateProfile?: (data:ProfileUpdateData ) => Promise<void>,
    updateProfileFn: (user: User, displayName: string | null, photoURL: string | null) => Promise<void> | null;
}


const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const signUp = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const logIn = (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logOut = () => {
        return auth.signOut();
    }

    const resetPassword = (email: string) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmailFn = (email: string) => {
        if(!currentUser){
            return null;
        }
        return updateEmail(currentUser, email);
    }
    const updatePasswordFn = (password: string) => {
        if(!currentUser){
            return null;
        }
        return updateEmail(currentUser, password);
    }

    const updateProfileFn = (user: User, displayName: string | null, photoURL: string | null) => {
        if(user){
            return updateProfile(user, {
                displayName,
                photoURL
            })
        }
        console.log('name is not updated')
        return null;
    }

        
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (user) => {
            if(user){
                setCurrentUser(user)
            }
            setIsLoading(false)
        })
        
        return () => unsubscribe();
    }, [])
    

    const AuthValues: AuthContextType = {
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updateEmailFn,
        updatePasswordFn,
        updateProfileFn,
    }
    return (
    <AuthContext.Provider value={AuthValues}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}


