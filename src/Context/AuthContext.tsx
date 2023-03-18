import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../components/firebase'

interface AuthProviderProps {
    children: React.ReactNode,
}

type authType = {
    signUp: ReturnType<typeof auth.createUserWithEmailAndPassword>,
    logIn: ReturnType<typeof auth.signInWithEmailAndPassword>,
}

interface AuthContextType {
    currentUser: any,
    signUp: (email: string, password: string) => authType["signUp"],
    logIn: (email: string, password: string) => authType["logIn"],
    logOut: () => Promise<void>,
    resetPassword: (email: string) => Promise<void> | undefined,
    updateEmail: (email: string) => Promise<void> | undefined,
    updatePassword: (email: string) => Promise<void> | undefined,
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<AuthContextType>();
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

    const updateEmail = (email: string) => {
        return currentUser?.updateEmail(email);
    }
    const updatePassword = (password: string) => {
        return currentUser?.updatePassword(password);
    }

        
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( (user: any | null) => {
            setCurrentUser(user)
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
        updateEmail,
        updatePassword,
    }
    return (
    <AuthContext.Provider value={AuthValues}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}


