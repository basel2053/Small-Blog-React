import { IUser } from '../interface/user';
import useBlogContext from './use-blogContext';
import useHttp from './use-http';

const useRefreshToken = () => {
  const { setUser } = useBlogContext();

  const refresh = async () => {
    const { data, errors } = await useHttp('token/refresh', 'GET');
    setUser((prev: Partial<IUser> | undefined) => ({ name: data?.name, accessToken: data?.accessToken }));
    return data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
