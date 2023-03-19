import UserPortal from '../css/UserPortal.module.css';
import { useRef, LegacyRef, useState } from 'react';
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

type contextPropsType = {
    currentUser: any;
    updateEmailFn: (email: string | undefined) => Promise<void>;
    updatePasswordFn: (password: string) => Promise<void>;
    // setDisplayName: (name: string | undefined) => Promise<void>;
}


function UpdateProfile() {
    let navigate = useNavigate();
    const fullNameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();
    const { currentUser, updateEmailFn, updatePasswordFn } = useAuth() as contextPropsType;
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
        // if(fullNameRef.current?.value !== currentUser.displayName){
        //     Promises.push(setDisplayName(fullNameRef.current?.value))
        // }
        if(emailRef.current?.value !== currentUser.email){
            Promises.push(updateEmailFn(emailRef.current?.value))
        }
        if(passwordRef.current?.value){
            Promises.push(updatePasswordFn(passwordRef.current?.value))
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
    <div className={UserPortal.container}>
        <div className={UserPortal.card}>
            <h2 className={UserPortal.title}>Update Profile</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className='form'>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="full-name" className={UserPortal.label}>Full Name
                    </label>
                    <input type="text" id='full-name' defaultValue={currentUser.displayName} ref={fullNameRef  as LegacyRef<HTMLInputElement>}/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="email" className={UserPortal.label}>Email
                    </label>
                    <input type="email" id='email' defaultValue={currentUser.email} ref={emailRef  as LegacyRef<HTMLInputElement>}/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="password" className={UserPortal.label}>Password
                    </label>
                    <input type="password" id='password' placeholder='Enter new password' ref={passwordRef as LegacyRef<HTMLInputElement>}/>
                </div>
                <div className={UserPortal['form-group']}>
                    <label htmlFor="confirm-password" className={UserPortal.label}>Confirm Password 
                    </label>
                    <input type="password" id='confirm-password' placeholder='Confirm new password' ref={confirmPasswordRef as LegacyRef<HTMLInputElement>}/>
                </div>
                <button disabled={isLoading} type='submit' className={UserPortal.btn}>Update Profile</button>
            </form>
        </div>
        <div className=''>
            <Link to="/">Cancel</Link>
        </div>
    </div>
  )
}

export default UpdateProfile;