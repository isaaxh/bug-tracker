import app from '../components/firebase';
import { useAuth } from '../Context/AuthContext';

type contextPropsType = {
  currentUser: any;
}



const Dashboard = () => {
  const { currentUser } = useAuth() as contextPropsType;

  return (
    <div className='page'>
        <h1>Dashboard</h1>
        <div>WELCOME {currentUser.displayName}! YOU ARE NOW ON HOME PAGE!</div>
    </div>
  )
}

export default Dashboard;