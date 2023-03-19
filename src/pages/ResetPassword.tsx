import UserPortal from '../css/UserPortal.module.css'
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link } from 'react-router-dom';

type contextPropsType = {
    currentUser: any;
    resetPassword: (email: string | undefined) => Promise<void>;
}


function ResetPassword() {
    const emailRef = useRef<HTMLInputElement>();
    const { resetPassword } = useAuth() as contextPropsType;
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setIsLoading(true);
            await resetPassword(emailRef.current?.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('Failed to reset password');
        }
        setIsLoading(false);
    }
    

  return (
    <div className={UserPortal.container}>
        <div className={UserPortal.card}>
            <h2 className={UserPortal.title}>Password Reset</h2>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="email" className={UserPortal.label}>Email
                    </label>
                    <input type="email" id='email' ref={emailRef  as LegacyRef<HTMLInputElement>} required/>
                </div>
                <button disabled={isLoading} type='submit' className={UserPortal.btn}>Reset Password</button>
                 <Link to="/login">Log In</Link>
            </form>
        </div>
        <div className=''>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default ResetPassword;