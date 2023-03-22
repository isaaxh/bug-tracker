import style from '../css/Dashboard.module.css';
import MenuIcon from '@mui/icons-material/Menu';

interface MobileNavbarPropsTypes {
    handleMenuState: (state: boolean) => void; 
}

function MobileNavbar({handleMenuState}: MobileNavbarPropsTypes) {   
   
    const handleMenuClick = (state: boolean) => {
        handleMenuState(state)
    }
   
   return (
   <nav className={style['mobile-navbar']}>
      <div className={style['menu-btn-container']}>
        <MenuIcon className={style['menu-icon']} onClick={() => handleMenuClick(true)} />
      </div>
      <div className={style['app-title-container']}>
        <h1>Bug Tracker</h1>
      </div>
    </nav>);
  }

export default MobileNavbar;