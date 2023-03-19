import { useEffect, useState } from 'react';
import useRefreshToken from '../hook/use-refreshToken';
import useAuth from '../hook/use-blogContext';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PresistenceLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh(); //react to api, while using the cookie to get us an accessToken
      } catch (err) {
        console.log(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !user?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PresistenceLogin;
