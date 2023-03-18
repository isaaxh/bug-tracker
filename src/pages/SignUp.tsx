import signUpCss from '../css/SignUp.module.css'
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { auth } from '../components/firebase';

type contextPropsType = {
    currentUser: any;
    signUp: (email: string | undefined, password: string | undefined) => ReturnType<typeof auth.createUserWithEmailAndPassword>;    
}


function SignUp() {
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
        } catch {
            setError('Failed to create an account')
        }
        setIsLoading(false);
    }
    

  return (
    <div className={signUpCss.container}>
        <div className={signUpCss.card}>
            <h2 className={signUpCss.title}>Sign Up</h2>
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
                <div className={signUpCss['form-group']}>
                    <label htmlFor="confirm-password" className={signUpCss.label}>Confirm Password 
                    </label>
                    <input type="password" id='confirm-password' ref={confirmPasswordRef as LegacyRef<HTMLInputElement>} required/>
                </div>
                <button disabled={isLoading} type='submit' className={signUpCss.btn}>Sign Up</button>
            </form>
        </div>
        <div className=''>
            Already have an account? Log In
        </div>
    </div>
  )
}

export default SignUp;