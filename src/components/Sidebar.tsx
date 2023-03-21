import style from '../css/Dashboard.module.css';
import BugReportIcon from '@mui/icons-material/BugReport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface SidebarPropsType {
  displayName: string | null;
  menuState: boolean;
  handleMenuState: (state: boolean) => void;
}


function Sidebar({displayName, menuState, handleMenuState}: SidebarPropsType) {
    
    
    const handleBtnClick = (state: boolean) => {
      handleMenuState(state)
    }

    let styling = {};
    if(menuState){
      styling = {
        left: "0%"
      }
    } else {
      styling = {
        left: "-100%"
      }
    }

    return (
    <div className={style.sidebar} style={styling}>
      <div className={style['sidebar-title-container']}>
        <h3 className={style['sidebar-title']}>
        <BugReportIcon/>Bug Tracker</h3>
        <div>Welcome, {displayName}!</div>
      </div>
      <ul>
        <li>
          <DashboardIcon className={style['sidebar-icon']}/> 
          <div>Dashboard</div>
        </li>
        <li>
          <GroupAddIcon className={style['sidebar-icon']}/>
          <div>Manage Role Assignment</div>
          </li>
        <li>
          <GroupIcon className={style['sidebar-icon']}/>
          <div>Manage project Users</div>
        </li>
        <li>
          <FormatListBulletedIcon className={style['sidebar-icon']}/>
          <div>My Projects</div>
        </li>
        <li>
          <ConfirmationNumberIcon className={style['sidebar-icon']}/>
          <div>My tickets</div>
        </li>
        <li>
          <AccountCircleIcon className={style['sidebar-icon']}/>
          <div>User Profile</div>
        </li>
      </ul>
      <button className={style['close-btn']} onClick={() => handleBtnClick(false)}>Close Menu</button>
    </div>
    );
  }

export default Sidebar;