import { SignOut } from './SignIn';

interface User {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}

type HomeProps = {
    auth: any,
    user: User,
}


const Home = (props: HomeProps) => {

    const { displayName, email, photoURL } = props.user;

  return (
    <div>
        <h1>Dashboard</h1>
        <div>WELCOME {displayName}! YOU ARE NOW ON HOME PAGE!</div>
        <SignOut auth={props.auth} />
    </div>
  )
}

export default Home