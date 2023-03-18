import signUpCss from '../css/SignUp.module.css';
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

type contextPropsType = {
    currentUser: any;
    updateEmail: (email: string | undefined) => Promise<void>;
    updatePassword: (password: string) => Promise<void>;
}


function UpdateProfile() {
    let navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();
    const { currentUser, updateEmail, updatePassword } = useAuth() as contextPropsType;
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if(passwordRef.current?.value !== confirmPasswordRef.current?.value){
            return setError('Passwords do not match!');
        }
        
        const Promises = [];
        setIsLoading(true);
        setError('');
        if(emailRef.current?.value !== currentUser.email){
            Promises.push(updateEmail(emailRef.current?.value))
        }
        if(passwordRef.current?.value){
            Promises.push(updatePassword(passwordRef.current?.value))
        }

        Promise.all(Promises).then(()=> {
            navigate("/")
        }).catch(() => {
            setError('Failed to update profile')
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    

  return (
    <div className={signUpCss.container}>
        <div className={signUpCss.card}>
            <h2 className={signUpCss.title}>Update Profile</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={signUpCss['form-group']}>
                    <label htmlFor="email" className={signUpCss.label}>Email
                    </label>
                    <input type="email" id='email' defaultValue={currentUser.email} ref={emailRef  as LegacyRef<HTMLInputElement>}/>
                </div>
                <div className={signUpCss['form-group']}>
                    <label htmlFor="password" className={signUpCss.label}>Password
                    </label>
                    <input type="password" id='password' placeholder='Enter new password' ref={passwordRef as LegacyRef<HTMLInputElement>}/>
                </div>
                <div className={signUpCss['form-group']}>
                    <label htmlFor="confirm-password" className={signUpCss.label}>Confirm Password 
                    </label>
                    <input type="password" id='confirm-password' placeholder='Confirm new password' ref={confirmPasswordRef as LegacyRef<HTMLInputElement>}/>
                </div>
                <button disabled={isLoading} type='submit' className={signUpCss.btn}>Update Profile</button>
            </form>
        </div>
        <div className=''>
            <Link to="/dashboard">Cancel</Link>
        </div>
    </div>
  )
}

export default UpdateProfile;