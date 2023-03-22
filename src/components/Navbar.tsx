import style from '../css/Dashboard.module.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profileImg1 from '../imgs/profile-img-1.webp';
import profileImg2 from '../imgs/profile-img-2.webp';

const Navbar = () => {
  return (
    <div className={style['navbar']}>
        <div>
            <h2 className="role">Role: Admin</h2>
        </div>
        <div className={style['profile-container']}>
            <div className="notification-container">
                <NotificationsIcon />
            </div>
            <div className="user-profile-container">
                <img src={profileImg2} alt="profile-img" />
            </div>
        </div>
    </div>
  )
}

export default Navbar