import './css/App.css';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';

function App() {

  return (
    <div className="App container">
      <AuthProvider>
      <nav>
        <ul>
          <Link to='/'>Dashboard</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/signin'>SignIn</Link>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>  
      </AuthProvider>
    </div>
  );
}


export default App;
