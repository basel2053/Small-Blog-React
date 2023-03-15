import useAuth from './use-auth';
import useHttp from './use-http';

const useLogout = () => {
  const { setIsLoggedIn } = useAuth();

  const logout = async () => {
    setIsLoggedIn({});
    try {
      await useHttp('logout', 'GET');
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
