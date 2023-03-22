import React, { useState } from 'react';
import Input from '../components/Input';
import useInput from '../hook/use-input';
import useHttp from '../hook/use-http';
import CheckIcon from '../components/icons/CheckIcon';

const Forgot = () => {
  const emailInput = useInput((val: string) => val.includes('@') && val.length > 4);
  const [forgotMsg, setForgotMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const forgotHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, errors } = await useHttp('users/forgot-password', 'POST', { email: emailInput.value });
    if (errors) {
      console.log(errors);
      setForgotMsg(`Error: ${(errors as IValidationError).msg || errors}`);
    } else {
      setShowSuccess(true);
    }
  };

  return (
    <div className='min-h-screen bg-base-100 flex justify-center items-center'>
      <div className='absolute w-60 h-60 rounded-xl bg-primary -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
      <div className='absolute w-48 h-48 rounded-xl bg-primary  right-6 bottom-10 transform rotate-12 hidden md:block'></div>
      {!showSuccess ? (
        <form className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20' onSubmit={forgotHandler}>
          <div>
            <p className='text-rose-500 underline'>{forgotMsg}</p>
            <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>Reset Password</h1>
            <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
              Provide your account email to reset your password!
            </p>
          </div>
          <div className='space-y-4'>
            <Input
              name='Email'
              placeholder='Your account email...'
              type='text'
              value={emailInput.value}
              onChange={emailInput.inputChangeHandler}
              onBlur={emailInput.inputBlurHandler}
              className={emailInput.hasError ? 'border-rose-500' : ''}
            />
            {emailInput.hasError && (
              <p className='text-xs font-medium mt-1 text-rose-500'>Email must be valid (contains @).</p>
            )}
          </div>
          <div className='text-center mt-6'>
            <button
              className='py-3 w-full text-xl text-white cursor-pointer bg-primary rounded-lg transition-colors hover:bg-primary-focus disabled:cursor-default disabled:bg-primary disabled:bg-opacity-80'
              disabled={!emailInput.isValid}
            >
              Reset
            </button>
          </div>
        </form>
      ) : (
        <div className='w-1/2 h-1/4 bg-white shadow-md rounded-md flex flex-col items-center'>
          <CheckIcon />
          <h2 className='text-2xl font-semibold mt-6 mb-2'>An E-mail has been sent!</h2>
          <p className='mb-10 text-gray-600'>Please check your email..</p>
        </div>
      )}
      <div className='w-40 h-40 absolute bg-primary rounded-full top-0 right-12 hidden md:block'></div>
      <div className='w-20 h-40 absolute bg-primary rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
    </div>
  );
};

export default Forgot;
