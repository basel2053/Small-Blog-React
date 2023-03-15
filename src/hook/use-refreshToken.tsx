import { IUser } from '../interface/user';
import useAuth from './use-auth';
import useHttp from './use-http';

const useRefreshToken = () => {
  const { setIsLoggedIn } = useAuth();

  const refresh = async () => {
    const { data, errors } = await useHttp('token/refresh', 'GET');
    setIsLoggedIn((prev: Partial<IUser> | undefined) => ({ ...prev, accessToken: data?.accessToken }));
    return data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
