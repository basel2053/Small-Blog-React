import { useEffect, useState } from 'react';
import useRefreshToken from '../hook/use-refreshToken';
import useAuth from '../hook/use-auth';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PresistenceLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged } = useAuth();
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
    !isLogged?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default PresistenceLogin;
