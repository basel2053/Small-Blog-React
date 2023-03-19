import useBlogContext from './use-blogContext';
import useHttp from './use-http';

const useLogout = () => {
  const { setUser } = useBlogContext();

  const logout = async () => {
    setUser({});
    try {
      await useHttp('logout', 'GET');
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
