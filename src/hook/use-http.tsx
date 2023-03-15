import axios, { AxiosError } from 'axios';

type httpMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const baseURL = 'http://localhost:3000/';

const useHttp = async (body: object, path: string, method: httpMethods, headers?: object) => {
  let errors: object | undefined, data: object | undefined;
  const res = await axios({
    method,
    url: `${baseURL}${path}`,
    data: body,
  }).catch((err: AxiosError) => {
    const data = err.response?.data as any;
    errors = data.errors;
  });
  if ((res?.status + '').startsWith('2')) {
    // ? NOTE  simply to know whether the request successed or no we can return true or false based on if we got error or not
    data = res?.data;
  }
  return { data, errors };
};

export default useHttp;
