import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../components/firebase'

type AuthProviderProps = {
    children: React.ReactNode,
}


let AuthValues = {}

export function AuthProvider({children}: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( (user) => {
            console.log(user)
        })
        
      return () => unsubscribe();
    }, [])
    

    AuthValues = {
        currentUser,
        signup
    }
    return (
    <AuthContext.Provider value={AuthValues}>
        {children}
    </AuthContext.Provider>
  )
}

const AuthContext = React.createContext(AuthValues);

export function useAuth() {
    return useContext(AuthContext)
}
