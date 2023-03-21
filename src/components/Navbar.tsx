import style from '../css/Dashboard.module.css';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarPropsTypes {
    // screenWidth: number;
}

function Navbar({}: NavbarPropsTypes) {   
   return (<nav>
      <div className={style['menu-container']}>
        <MenuIcon />
      </div>
      <div className={style['page-container']}>
        <h1>Bug Tracker</h1>
      </div>
    </nav>);
  }

export default Navbar;