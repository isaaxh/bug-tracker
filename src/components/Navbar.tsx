import style from '../css/Dashboard.module.css';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarPropsTypes {
    handleMenuState: (state: boolean) => void; 
}

function Navbar({handleMenuState}: NavbarPropsTypes) {   
   
    const handleMenuClick = (state: boolean) => {
        handleMenuState(state)
    }
   
   return (<nav>
      <div className={style['menu-container']}>
        <MenuIcon onClick={() => handleMenuClick(true)} />
      </div>
      <div className={style['app-title-container']}>
        <h1>Bug Tracker</h1>
      </div>
    </nav>);
  }

export default Navbar;