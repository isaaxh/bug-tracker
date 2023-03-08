import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/SignIn';
import firebase from 'firebase/compat/app';
import { config } from './config/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp(config.firebaseConfig);


function App() {

  const auth = firebase.auth();

  const [user] = useAuthState(auth as any);

  return (
    <div className="App">
      {user ? <Dashboard auth={auth} user={user}/> : <Login auth={auth}/>}
    </div>
  );
}


export default App;
