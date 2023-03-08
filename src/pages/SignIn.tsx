import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

type SignInProps = {
  auth: any;
}

const SignIn = (props: SignInProps) => {

  const signInWithGoogle =  () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <div>
        <h1>LOGIN PAGE</h1>
        {/* <input /> */}
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}


export const SignOut = (props: SignInProps) => {
  return props.auth.currentUser && (
    <button onClick={() => props.auth.signOut()}>Logout</button>
  )
}


export default SignIn;