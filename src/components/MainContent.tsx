import { useContext } from 'react';
import { TabValueContext } from '../Context/TabContext';
import dashStyle from '../css/Dashboard.module.css'
import style from '../css/MainContent.module.css'


interface MainContentPropsType {
    error: string;
}


function MainContent({error}: MainContentPropsType) {
    const {state} = useContext(TabValueContext)

    return (
    <div className={dashStyle['main-content-container']}>
      <div className={style['main-container']}>
        {state.currentTab}
      </div>
    </div>);
  }
  
  export default MainContent;
  
  
 