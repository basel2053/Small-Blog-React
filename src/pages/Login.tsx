import React, { useState } from 'react';
import Input from '../components/Input';
import useHttp from '../hook/use-http';
import useInput from '../hook/use-input';
import useBlogContext from '../hook/use-blogContext';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ConfirmMessage from '../components/ConfirmMessage';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from '../components/GoogleButton';

const Login = () => {
  const { setUser } = useBlogContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();
  // ! from will give us where the user came from instead of just navigating them to the home page
  const from = location.state?.from.pathname || '/';

  const [loginMsg, setLoginMsg] = useState('');
  const emailInput = useInput((val: string) => val.includes('@') && val.length > 4);
  const passwordInput = useInput((val: string) => val.length >= 6 && val.length <= 16);
  let formIsValid = false;
  if (emailInput.isValid && passwordInput.isValid) {
    formIsValid = true;
  }
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    const { data, errors } = await useHttp('users/login', 'POST', user);
    if (errors) {
      setLoginMsg(`Error: ${(errors as IValidationError).msg || errors}`);
    } else {
      setUser(data);
      navigate(from, { replace: true });
    }
  };

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async ({ code }) => {
      const { data } = await useHttp('users/oauth2/google', 'POST', { code });
      setUser(data);
      navigate(from, { replace: true });
    },
    onError: errorResponse => console.log(errorResponse),
  });

  return (
    <div className='min-h-screen bg-base-100 flex justify-center items-center'>
      <div className='absolute w-60 h-60 rounded-xl bg-primary -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
      <div className='absolute w-48 h-48 rounded-xl bg-primary  right-6 bottom-10 transform rotate-12 hidden md:block'></div>
      {searchParams.get('confirmed') === 'true' && <ConfirmMessage />}
      <form className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20' onSubmit={loginHandler}>
        <div>
          <p className='text-rose-500 underline'>{loginMsg}</p>
          <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>Sign In</h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Login to enjoy all the services, have fun!
          </p>
        </div>
        <div className='space-y-4'>
          <Input
            name='Email'
            placeholder='123@ex.com'
            type='text'
            value={emailInput.value}
            onChange={emailInput.inputChangeHandler}
            onBlur={emailInput.inputBlurHandler}
            className={emailInput.hasError ? 'border-rose-500' : ''}
          />
          {emailInput.hasError && (
            <p className='text-xs font-medium mt-1 text-rose-500'>Email must be valid (contains @).</p>
          )}
          <Input
            name='Password'
            placeholder='Password'
            type='password'
            value={passwordInput.value}
            onChange={passwordInput.inputChangeHandler}
            onBlur={passwordInput.inputBlurHandler}
            className={passwordInput.hasError ? 'border-rose-500' : ''}
          />
          {passwordInput.hasError && (
            <p className='text-xs font-medium mt-1 text-rose-500'>Password must be between 6 and 16 characters.</p>
          )}
        </div>
        <div className='text-center mt-6'>
          {/* <button
            onClick={googleLogin}
            type='button'
            className='text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-6'
          >
            <svg
              className='w-4 h-4 mr-2 -ml-1'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Sign in with Google 🚀
          </button> */}
          <GoogleButton loginHandler={googleLogin} />
          <button
            className='py-3 w-full text-xl text-white cursor-pointer bg-primary rounded-lg transition-colors hover:bg-primary-focus disabled:cursor-default disabled:bg-primary disabled:bg-opacity-80'
            disabled={!formIsValid}
          >
            Login
          </button>
          <p className='mt-4 text-sm'>
            Forgot your password?
            <Link to='/forgot' className='underline cursor-pointer'>
              forget password
            </Link>
          </p>
        </div>
      </form>
      <div className='w-40 h-40 absolute bg-primary rounded-full top-0 right-12 hidden md:block'></div>
      <div className='w-20 h-40 absolute bg-primary rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
    </div>
  );
};

export default Login;
