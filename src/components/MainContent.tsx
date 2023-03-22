import dashStyle from '../css/Dashboard.module.css'
import style from '../css/MainContent.module.css'
import Navbar from '../components/Navbar';

interface MainContentPropsType {
    error: string;
}


function MainContent({error}: MainContentPropsType) {
    return (
    <div className={dashStyle['main-content-container']}>
    {/* <Navbar /> */}
      <div className={style.card}>
        {/* <h3>Profile</h3>
        <div><strong>Name:</strong>{currentUser.displayName}</div>
        <div><strong>Email:</strong> {currentUser.email}</div>
        <Link to="/update-profile">Update profile</Link> */}
      </div>
      {error && <p>{error}</p>}
    </div>);
  }

export default MainContent;