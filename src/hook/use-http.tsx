import axios, { AxiosError } from 'axios';

type httpMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const baseURL = 'http://localhost:3000/';

const useHttp = async (body: object, path: string, method: httpMethods) => {
  const res = await axios({
    method,
    url: `${baseURL}${path}`,
    data: body,
  }).catch((err: AxiosError) => {
    console.log(err);
    // if (err.response) setSubmitMsg(err.response.data + ', or the email is not valid');
  });
  if (res?.status === 200) {
    // ? NOTE  simply to know whether the request successed or no we can return true or false based on if we got error or not
    // setSubmitMsg('created sucessfully, you will be redirected');
    // setTimeout(() => {
    // navigate('/login');
    // }, 3000);
  }
};

export default useHttp;
