import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../components/firebase'



interface AuthProviderProps {
    children: React.ReactNode,
}

type authType = ReturnType<typeof auth.createUserWithEmailAndPassword>;
interface AuthContextType {
    currentUser: any,
    signUp: (email: string, password: string) => authType;
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

        
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( (user: any | null) => {
            setCurrentUser(user)
            setIsLoading(false)
        })
        
        return () => unsubscribe();
    }, [])
    

    const AuthValues: AuthContextType = {
        currentUser,
        signUp
    }
    return (
    <AuthContext.Provider value={AuthValues}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}


