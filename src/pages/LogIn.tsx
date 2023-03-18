import signUpCss from '../css/SignUp.module.css'
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { auth } from '../components/firebase';
import { Link, useNavigate } from 'react-router-dom';

type contextPropsType = {
    currentUser: any;
    signUp: (email: string | undefined, password: string | undefined) => ReturnType<typeof auth.createUserWithEmailAndPassword>;    
    logIn: (email: string | undefined, password: string | undefined) => ReturnType<typeof auth.signInWithEmailAndPassword>;    
}


function LogIn() {
    let navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const { logIn } = useAuth() as contextPropsType;
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setError('');
            setIsLoading(true);
            await logIn(emailRef.current?.value, passwordRef.current?.value)
            navigate("/")
        } catch {
            setError('Failed to log in')
        }
        setIsLoading(false);
    }
    

  return (
    <div className={signUpCss.container}>
        <div className={signUpCss.card}>
            <h1 className={signUpCss.title}>Log In</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={signUpCss['form-group']}>
                    <label htmlFor="email" className={signUpCss.label}>Email
                    </label>
                    <input type="email" id='email' ref={emailRef  as LegacyRef<HTMLInputElement>} required/>
                </div>
                <div className={signUpCss['form-group']}>
                    <label htmlFor="password" className={signUpCss.label}>Password
                    </label>
                    <input type="password" id='password' ref={passwordRef as LegacyRef<HTMLInputElement>} required/>
                </div>
                <button disabled={isLoading} type='submit' className={signUpCss.btn}>Sign In</button>
                 <Link to="/reset-password">Forgot password?</Link>
            </form>
        </div>
        <div className=''>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default LogIn;