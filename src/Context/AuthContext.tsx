import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../components/firebase'



interface AuthProviderProps {
    children: React.ReactNode,
}

type authSignUpType = ReturnType<typeof auth.createUserWithEmailAndPassword>;
type authSignInType = ReturnType<typeof auth.signInWithEmailAndPassword>;

interface AuthContextType {
    currentUser: any,
    signUp: (email: string, password: string) => authSignUpType;
    logIn: (email: string, password: string) => authSignInType;
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
        logIn
    }
    return (
    <AuthContext.Provider value={AuthValues}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}


