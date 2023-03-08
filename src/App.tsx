import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
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
      {user ? <Home auth={auth} /> : <Login auth={auth}/>}
    </div>
  );
}


export default App;
