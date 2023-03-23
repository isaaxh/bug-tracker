import style from '../css/Dashboard.module.css';
import BugReportIcon from '@mui/icons-material/BugReport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TabValueContext } from '../Context/TabContext';

interface SidebarPropsType {
  displayName: string | null;
  menuState: boolean;
  handleMenuState: (state: boolean) => void;
  handleLogOut: () => Promise<void>;
}

function Sidebar({displayName, menuState, handleMenuState, handleLogOut}: SidebarPropsType) {
    const sidebarRef = React.createRef;
    const {dispatch, ACTIONS} = useContext(TabValueContext)
    
    const handleBtnClick = (state: boolean) => {
      handleMenuState(state)
    }
    
    
    const handleMenuCloseClick = () => {
      
    }


    const sidebarStyling = {
      left: menuState ? "0%" : "-100%"
    };

    
    const overlayStyling = {
      // opacity: menuState ? "1" : "0.1"
    };

    return (
    <div className={style['sidebar-overlay']} style={overlayStyling}>
      <div className={style.sidebar} ref={sidebarRef} style={sidebarStyling}>
        <div className={style['sidebar-title-container']}>
          <div className={style['logo-container']}>
            <BugReportIcon className={style.logo}/>
            <h3 className={style['sidebar-title']}>Bug Tracker</h3>
          </div>
          <div>Welcome, {displayName}!</div>
        </div>
        <div className={style['sidebar-links-container']}>
        <ul>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_HOME})}>
            <DashboardIcon className={style['sidebar-icon']}/> 
            <div>Home</div>
          </li>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_MANAGE_ROLE_ASSIGNMENT})}>
            <GroupAddIcon className={style['sidebar-icon']}/>
            <div>Manage Role Assignment</div>
          </li>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_MANAGE_PROJECT_USERS})}>
            <GroupIcon className={style['sidebar-icon']}/>
            <div>Manage project Users</div>
          </li>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_MY_PROJECTS})}>
            <FormatListBulletedIcon className={style['sidebar-icon']}/>
            <div>My Projects</div>
          </li>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_MY_TICKETS})}>
            <ConfirmationNumberIcon className={style['sidebar-icon']}/>
            <div>My tickets</div>
          </li>
          </ul>
          <ul>
          <li onClick={() => dispatch({ type: ACTIONS.GO_TO_USER_PROFILE})}>
            <AccountCircleIcon className={style['sidebar-icon']}/>
            <div>User Profile</div>
          </li>
          <li onClick={handleLogOut}>
            <LogoutIcon className={style['sidebar-icon']}/>
            <div><Link to="/login" className={style['list-item']}>Logout</Link></div>
          </li>
        </ul>
        </div>
        <button className={style['close-btn']} onClick={() => handleBtnClick(false)}>Close Menu</button>
      </div>
    </div>
    );
  }

export default Sidebar;