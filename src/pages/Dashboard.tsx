import UserPortal from '../css/UserPortal.module.css';
import style from '../css/Dashboard.module.css';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { User } from "firebase/auth"; 
import MobileNavbar from "../components/MobileNavbar";
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import { TabValueProvider } from '../Context/TabContext';

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
      <TabValueProvider>
        <Sidebar displayName={currentUser.displayName} menuState={isMenuOpen} 
                handleMenuState={handleMenuState} handleLogOut={handleLogOut}/> 
        {screenWidth < 768 ? <MobileNavbar handleMenuState={handleMenuState} /> : <Navbar />}
        <MainContent error={error}/>
      </TabValueProvider>
    </div>
  )
}

export default Dashboard;