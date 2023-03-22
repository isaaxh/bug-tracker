import UserPortal from '../css/UserPortal.module.css';
import style from '../css/Dashboard.module.css';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { User } from "firebase/auth"; 
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';

interface contextPropsType {
  currentUser: User;
  logOut: () => Promise<void>;
}


const Dashboard = () => {
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth() as contextPropsType;
  let screenWidth = window.innerWidth;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  async function handleLogOut() {
    setError('')
    try{
      await logOut()
      navigate("/login")
    } catch {
      setError('Failed to logout')
    }
  }

  const handleMenuState = (nextState: boolean) => {
    setIsMenuOpen(nextState)
  }

  return (
    <div className={style.container}>
      <Sidebar displayName={currentUser.displayName} menuState={isMenuOpen} 
      handleMenuState={handleMenuState} handleLogOut={handleLogOut}/> 
      {screenWidth < 768 ? <Navbar handleMenuState={handleMenuState} /> : null}
      {/* {screenWidth > 768 ? <Sidebar /> : null} */}
      <div className={style['main-content']}>
        <div className={UserPortal.card}>
          <h3>Profile</h3>
          <div><strong>Name:</strong>{currentUser.displayName}</div>
          <div><strong>Email:</strong> {currentUser.email}</div>
          <Link to="/update-profile">Update profile</Link>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

    export default Dashboard;