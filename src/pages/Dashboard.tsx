import signUpCss from '../css/SignUp.module.css';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

interface contextPropsType {
  currentUser: any;
  logOut: () => Promise<void>;
}

const Dashboard = () => {
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth() as contextPropsType;

  async function handleLogOut() {
    setError('')

    try{
      await logOut()
      navigate("/login")
    } catch {
      setError('Failed to logout')
    }
  }
  return (
    <div className='page'>
        <h1>Dashboard</h1>
        <div className={signUpCss.card}>
          <h3>Profile</h3>
          <div><strong>Email:</strong> {currentUser.email}</div>
          <Link to="/update-profile">Update profile</Link>
        </div>
        {error && <p>{error}</p>}
        <Link to="/login" onClick={handleLogOut}>Logout</Link>
    </div>
  )
}

export default Dashboard;