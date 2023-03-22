import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useHttp from '../hook/use-http';
import { Link, useLocation } from 'react-router-dom';
import CheckIcon from '../components/icons/CheckIcon';

const Reset = () => {
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, watch } = useForm();
  const [codeError, setCodeError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isReseted, setIsRested] = useState(false);
  const params = useLocation().search;

  const codeSubmitHandler = async (values: any) => {
    const { data, errors } = await useHttp(`users/check-reset${params}`, 'POST', {
      code: Object.values(values).join(''),
    });
    if (errors) {
      setCodeError(errors + '');
    } else {
      setShowSuccess(true);
    }
  };

  const resetSubmitHandler = async (values: any) => {
    const { data, errors } = await useHttp(`users/reset-password${params}`, 'POST', values);
    if (errors) {
      console.log(errors);
    } else {
      setIsRested(true);
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <header className='w-full bg-primary h-10'></header>
      <h2 className='text-4xl text-center mt-20 font-medium'>
        {showSuccess
          ? 'Reset code validate, type your new password'
          : 'Validate reset code you recieved on E-mail to reset password'}
      </h2>
      {!showSuccess ? (
        <div className='flex flex-col items-center gap-6 absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-md py-10 px-6 shadow-md'>
          <h4 className='text-3xl font-bold'>Validation Code</h4>
          <p className='mt-2 text-rose-500'>{codeError}</p>
          <form className='rounded-md' onSubmit={handleSubmit(codeSubmitHandler)}>
            {Array(6)
              .fill(0)
              .map((e, i) => (
                <input
                  {...register(i + '')}
                  key={i}
                  type='text'
                  pattern='[0-9]*'
                  min='0'
                  max='9'
                  maxLength={1}
                  required
                  className='rounded shadow px-4 py-8 text-3xl w-20 mr-6 text-center focus:outline-primary'
                ></input>
              ))}
            <div className='text-center mt-10'>
              <button className='btn text-xl '>Verify Code</button>
            </div>
          </form>
        </div>
      ) : (
        <form
          className='absolute top-[45%] left-1/2 w-1/2 h-1/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md flex flex-col items-center'
          onSubmit={handleSubmit2(resetSubmitHandler)}
        >
          {isReseted ? (
            <>
              <CheckIcon />
              <h2 className='text-2xl font-semibold mt-6 mb-2'>Password has been reseted successfully!</h2>
              <p className='mb-10 text-gray-600'>Stay safe.</p>
              <Link to='/login' className='btn text-lg px-6'>
                Login
              </Link>
            </>
          ) : (
            <>
              <h2 className='text-2xl font-semibold my-8'>Enter your new password</h2>
              <input
                {...register2('password', {
                  required: 'This is required',
                  minLength: { value: 6, message: 'Title should be at least 3 characters.' },
                  maxLength: { value: 16, message: 'Title should be at most 16 characters.' },
                })}
                type='password'
                placeholder='New password...'
                className='input input-bordered w-full max-w-xs mb-6'
              />
              <input
                {...register2('confirmPassword', {
                  required: 'This is required',
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return "Password doesn't match.";
                    }
                  },
                })}
                type='password'
                placeholder='Confirm password..'
                className='input input-bordered w-full max-w-xs mb-6'
              />
              <button className='btn'>Change Password</button>
            </>
          )}
        </form>
      )}
      <footer className='w-full bg-neutral h-10 mt-auto'></footer>
    </div>
  );
};

export default Reset;
