import style from '../css/Dashboard.module.css';

interface SidebarPropsType {
  menuState: boolean;
  handleMenuState: (state: boolean) => void;
  
}


function Sidebar({menuState, handleMenuState}: SidebarPropsType) {
    
    
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
      <div>hello</div>
      <div>tom holland</div>
      <button onClick={() => handleBtnClick(false)}>Close Menu</button>
    </div>
    );
  }

export default Sidebar;