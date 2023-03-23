import dashStyle from '../css/Dashboard.module.css'
import style from '../css/MainContent.module.css'
import UserProfile from '../pages/UserProfile';


interface MainContentPropsType {
    error: string;
}


function MainContent({error}: MainContentPropsType) {
    return (
    <div className={dashStyle['main-content-container']}>
      <UserProfile />
    </div>);
  }
  
  export default MainContent;
  
  
 