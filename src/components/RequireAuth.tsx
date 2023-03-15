import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hook/use-auth';

const RequireAuth = () => {
  const { isLogged } = useAuth();
  const location = useLocation();

  return (
    // ? protects all the childs component nested inside of it, IMPORTANT  we could also check for roles (pass it as parameter), maybe navigate to unauthorized page also
    isLogged?.accessToken ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
