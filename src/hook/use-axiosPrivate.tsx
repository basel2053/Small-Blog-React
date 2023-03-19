import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';
import useBlogContext from './use-blogContext';
import useRefreshToken from './use-refreshToken';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { user } = useBlogContext();

  useEffect(() => {
    const reqInterceptor = axiosPrivate.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // if no auth header then its the first attempt
        if (config.headers && !config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      err => Promise.reject(err)
    );

    const resInterceptor = axiosPrivate.interceptors.response.use(
      res => res,
      async (err: AxiosError) => {
        // ? example to a failure here could be because token expired or something
        const prevRequest = err?.config; // getting prev request from config
        // ! we might need a custom property for sent (to check if we sent request once, otherwise we might get into infinite loop)
        //@ts-ignore
        if (err?.response?.status === 403 && !prevRequest?.sent) {
          //@ts-ignore
          prevRequest?.sent = true;
          const newAccessToken = await refresh();
          //@ts-ignore
          prevRequest?.headers['Authorization'] = `Bearer ${newAccessToken}`;
          //@ts-ignore
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    // HERE  cleanup the interceptors

    return () => {
      axiosPrivate.interceptors.response.eject(resInterceptor);
      axiosPrivate.interceptors.request.eject(reqInterceptor);
    };
  }, [user, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
