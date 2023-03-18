
import app from '../components/firebase';
import { useAuth } from '../Context/AuthContext';

// interface User {
//     displayName: string | null;
//     email: string | null;
//     photoURL: string | null;
// }

// type HomeProps = {
//     auth: any,
//     user: User,
// }



const Home = () => {

    // const { displayName, email, photoURL } = props.user;
    // {console.log(app.auth)}

  return (
    <div className='page'>
        <h1>Dashboard</h1>
        {/* <div>WELCOME {displayName}! YOU ARE NOW ON HOME PAGE!</div> */}
    </div>
  )
}

export default Home