import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

interface contextPropsType {
    currentUser: any;
}

function PrivateRoutes() {
    const { currentUser } = useAuth() as contextPropsType;
  return (
        currentUser ? <Outlet /> : <Navigate to="/login" /> 
    )
}

export default PrivateRoutes;