import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

interface ModalPropsType {
    handleState: (state: boolean) => void;
}


const Modal = ({handleState}: ModalPropsType) => {
    const overlayRef = React.createRef;


    const handleModalClick = (state: boolean) => {
        handleState(state)
    }

  return (
    <div className='modal-overlay' ref={overlayRef} onClick={() => handleModalClick(false)}>
        <div className="modal">
            <h2>Choose a demo user</h2>
            <div className="user-container">
                <div className="user-box admin">
                    <PersonIcon style={{color: 'black', fontSize: 60}} />
                    <p>Admin</p>
                </div>
                <div className="user-box manager">
                    <PersonIcon style={{color: 'black', fontSize: 60}} />
                    <p>Manager</p>
                </div>
                <div className="user-box dev">
                    <PersonIcon style={{color: 'black', fontSize: 60}} />
                    <p>Developer</p>
                </div>
                <div className="user-box sub">
                    <PersonIcon style={{color: 'black', fontSize: 60}} />
                    <p>Submitter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal