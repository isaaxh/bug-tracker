import styles from '../css/UserPortal.module.css'
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { auth } from '../components/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { User } from '@firebase/auth-types';
import MessageBox from '../components/MessageBox';

type contextPropsType = {
    currentUser: User;
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
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    
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

    const handleModalState = (nextState: boolean) => {
        setIsModalActive(nextState)
    }

    const handleDemoBtnClick = (state: boolean) => {
        handleModalState(state)
    }
    
    

  return (
    <div className={styles.container}>
        {/* <h1 className={styles['app-title']}>BugTracker</h1> */}
        <div className={styles.card}>
            <h1 className={styles.title}>Log In</h1>
            {error && <MessageBox message={error} type='error'/>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={styles['form-group']}>
                    <label htmlFor="email" className={styles.label}>Email
                    </label>
                    <input type="email" id='email' ref={emailRef  as LegacyRef<HTMLInputElement>} required/>
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password" className={styles.label}>Password
                    </label>
                    <input type="password" id='password' ref={passwordRef as LegacyRef<HTMLInputElement>} required/>
                </div>
                <button disabled={isLoading} type='submit' className={styles.btn}>Log In</button>
                 <Link to="/reset-password">Forgot password?</Link>
                 <div className={styles.links}>
                    <a className='modal-link' onClick={() => handleDemoBtnClick(true)}>Demo User</a>
                 </div>
            </form>
        </div>
        <div>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
        {isModalActive ? <Modal handleState={handleModalState}/> : null}
    </div>
  )
}

export default LogIn;