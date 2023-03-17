import signUpCss from '../css/SignUp.module.css'
import { useRef, LegacyRef } from 'react';
import { useAuth } from "../Context/AuthContext";

// type contextProps = {
//     // signup: (arg1: string, arg2: string) => Promise<firebase.auth.UserCredential | undefined>;
// }

interface AuthValues {
    currentUser: any;
  }

function SignUp() {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();

    function handleSubmit(e:any) {
        e.preventDefault();

    }

  return (
    <div className={signUpCss.container}>
        <div className={signUpCss.card}>
            <h2 className={signUpCss.title}>Sign Up</h2>
            <form action="#" className='form'>
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
                <button type='submit' className={signUpCss.btn}>Sign Up</button>
            </form>
        </div>
        <div className=''>
            Already have an account? Log In
        </div>
    </div>
  )
}

export default SignUp;