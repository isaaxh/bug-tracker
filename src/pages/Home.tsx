import { Logout } from './Login';

type HomeProps = {
    auth: any
}


const Home = (props: HomeProps) => {
  return (
    <div>
        <h1>HOME PAGE</h1>
        <div>WELCOME! YOU ARE NOW ON HOME PAGE!</div>
        <Logout auth={props.auth} />
    </div>
  )
}

export default Home