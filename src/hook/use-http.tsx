import axios, { AxiosError } from 'axios';

type httpMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const baseURL = 'http://localhost:3000/';

const useHttp = async (path: string, method: httpMethods, body?: object, headers?: object) => {
  let errors: object | undefined, data: any;
  const res = await axios({
    method,
    url: `${baseURL}${path}`,
    data: body,
    headers,
  }).catch((err: AxiosError) => {
    const data = err.response?.data as any;
    errors = data.errors || data.error;
  });
  if ((res?.status + '').startsWith('2')) {
    // ? NOTE  simply to know whether the request successed or no we can return true or false based on if we got error or not
    data = res?.data;
  }
  return { data, errors };
};

export default useHttp;
