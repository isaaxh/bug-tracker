import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

type LoginProps = {
  auth: any;
}

const Login = (props: LoginProps) => {

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


export const Logout = (props: LoginProps) => {
  return props.auth.currentUser && (
    <button onClick={() => props.auth.signOut()}>Logout</button>
  )
}


export default Login;