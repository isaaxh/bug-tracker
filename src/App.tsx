import './css/App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import { Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';

function App() {

  return (
    <div className="App container">
      <AuthProvider>
      {/* <nav>
        <ul>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </ul>
      </nav> */}
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>  
      </AuthProvider>
    </div>
  );
}


export default App;
