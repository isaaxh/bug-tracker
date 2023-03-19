import UserPortal from '../css/UserPortal.module.css';
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { auth } from '../components/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '@firebase/auth-types';

type contextPropsType = {
    signUp: (email: string | undefined, password: string | undefined) => 
    ReturnType<typeof auth.createUserWithEmailAndPassword>; 
}


function SignUp() {
    let navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();
    const { signUp } = useAuth() as contextPropsType;
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(passwordRef.current?.value !== confirmPasswordRef.current?.value){
            return setError('Passwords do not match!');
        }

        try {
            setError('');
            setIsLoading(true);
            await signUp(emailRef.current?.value, passwordRef.current?.value)
            .then((result)=>{
                return result.user?.updateProfile({
                    displayName: nameRef.current?.value
                })
            })
            navigate("/")
        } catch {
            setError('Failed to create an account')
        }
        setIsLoading(false);
    }
    
    
    return (
        <div className={UserPortal.container}>
        <div className={UserPortal.card}>
            <h1 className={UserPortal.title}>Sign Up</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="name" className={UserPortal.label}>Name
                    </label>
                    <input type="text" id='name' ref={nameRef  as LegacyRef<HTMLInputElement>} required/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="email" className={UserPortal.label}>Email
                    </label>
                    <input type="email" id='email' ref={emailRef  as LegacyRef<HTMLInputElement>} required/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="password" className={UserPortal.label}>Password
                    </label>
                    <input type="password" id='password' ref={passwordRef as LegacyRef<HTMLInputElement>} required/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="confirm-password" className={UserPortal.label}>Confirm Password 
                    </label>
                    <input type="password" id='confirm-password' ref={confirmPasswordRef as LegacyRef<HTMLInputElement>} required/>
                </div>
                <button disabled={isLoading} type='submit' className={UserPortal.btn}>Sign Up</button>
            </form>
        </div>
        <div className=''>
            Already have an account? <Link to="/login">Log In</Link>
        </div>
    </div>
  )
}

export default SignUp;