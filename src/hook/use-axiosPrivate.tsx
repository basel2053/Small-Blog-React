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

    interface RetryConfig extends InternalAxiosRequestConfig {
      sent?: boolean;
    }

    const resInterceptor = axiosPrivate.interceptors.response.use(
      res => res,
      async (err: AxiosError) => {
        // ? example to a failure here could be because token expired or something
        const prevRequest: RetryConfig | undefined = err?.config; // getting prev request from config
        if (!prevRequest) {
          return Promise.reject(err);
        }
        // const prevRequest = err?.config as RetryConfig; // HERE  alternative if wanna skip if
        // ! we might need a custom property for sent (to check if we sent request once, otherwise we might get into infinite loop)
        if (err?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
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
