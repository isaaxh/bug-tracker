import './css/App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import PrivateRoutes from './components/PrivateRoutes';
import ResetPassword from './pages/ResetPassword';
import UpdateProfile from './pages/UpdateProfile';

function App() {

  return (
    <div className="App container">
      <AuthProvider>
    <Routes>
      <Route element={<PrivateRoutes/>} >
        <Route path="/" element={<Dashboard />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>  
      </AuthProvider>
    </div>
  );
}


export default App;
