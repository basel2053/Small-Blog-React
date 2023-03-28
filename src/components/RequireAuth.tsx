import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useBlogContext from '../hook/use-blogContext';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const RequireAuth = () => {
  const { user } = useBlogContext();
  const location = useLocation();

  return user?.accessToken ? (
    <>
      <Navbar user={user?.name} />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
