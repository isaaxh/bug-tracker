
interface MessageBoxPropsType {
    message: string;
    type: string;
}


const MessageBox = ({message, type}: MessageBoxPropsType) => {
  return (
    <div className={`message-box ${type}`}>
        {message}
    </div>
  )
}

export default MessageBox