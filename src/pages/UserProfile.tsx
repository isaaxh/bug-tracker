import style from '../css/MainContent.module.css';
import { Link } from "react-router-dom"

const UserProfile = () => {
  return (
    <div className={style.tab}>
      <h1>UserProfile</h1>
        <div>
          <div><strong>Name:</strong>Isaac Hussain</div>
          <div><strong>Email:</strong>isaac@gmail.com</div>
          <Link to="/update-profile">Update profile</Link>
        </div>
        {/* {error && <p>{error}</p>} */}
    </div>
  )
}

export default UserProfile