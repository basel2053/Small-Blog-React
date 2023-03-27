import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Square from '../components/Square';
import useInput from '../hook/use-input';
import useHttp from '../hook/use-http';
import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import LoginModal from '../components/Modal/ModalTypes/LoginModal';

const Signup = () => {
  const [submitMsg, setSubmitMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const emailInput = useInput((val: string) => val.includes('@') && val.length > 4);
  const passwordInput = useInput((val: string) => val.length >= 6 && val.length <= 16);
  const confirmInput = useInput((val: string) => val === passwordInput.value);
  const nameInput = useInput((val: string) => val.trim().length >= 2);
  const navigate = useNavigate();

  let formIsValid = false;
  if (emailInput.isValid && passwordInput.isValid && confirmInput.isValid && nameInput.isValid) {
    formIsValid = true;
  }

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmInput.value,
      name: nameInput.value,
    };
    const { errors } = await useHttp('users/signup', 'POST', user);
    if (errors) {
      setSubmitMsg(`Error: ${(errors as IValidationError).msg}`);
    } else {
      setShowModal(true);
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 4000);
    }
  };

  return (
    <>
      <div className='bg-white relative lg:py-20'>
        <div
          className='flex flex-col items-center justify-between pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row sm:pl-10 sm:pr-10'
        >
          <div className='flex flex-col items-center w-full pt-5 pr-4 pb-20 pl-4 lg:pt-20 lg:flex-row sm:pl-10 sm:pr-10'>
            <div className='w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12 hidden lg:block xs:hidden'>
              <div className='flex flex-col items-center justify-center w-full h-full relative lg:pr-10'>
                <img src='/Run_-_Health_qcghbu.png' className='btn-' />
              </div>
            </div>
            <div className='w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12'>
              <div
                className='flex flex-col items-start justify-start pt-10 pr-4 pb-10 pl-4 bg-white shadow-2xl rounded-xl
              relative z-10 sm:pl-10 sm:pr-10'
              >
                <p className='text-rose-500 underline'>{submitMsg}</p>
                <p className='w-full text-4xl font-medium text-center leading-snug font-serif'>
                  Sign up for an account
                </p>
                <form className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8' onSubmit={registerHandler}>
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
                    <p className='text-xs font-medium inline text-rose-500'>Email must be valid (contains @).</p>
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
                    <p className='text-xs font-medium inline text-rose-500'>
                      Password must be between 6 and 16 characters.
                    </p>
                  )}
                  <Input
                    name='ConfirmPassword'
                    placeholder='Enter the password one more time'
                    type='password'
                    value={confirmInput.value}
                    onChange={confirmInput.inputChangeHandler}
                    onBlur={confirmInput.inputBlurHandler}
                    className={confirmInput.hasError ? 'border-rose-500' : ''}
                  />
                  {confirmInput.hasError && (
                    <p className='text-xs font-medium inline text-rose-500'>Password doesn't match.</p>
                  )}
                  <Input
                    name='username'
                    placeholder='John'
                    type='text'
                    value={nameInput.value}
                    onChange={nameInput.inputChangeHandler}
                    onBlur={nameInput.inputBlurHandler}
                    className={confirmInput.hasError ? 'border-rose-500' : ''}
                  />
                  {nameInput.hasError && (
                    <p className='text-xs font-medium inline text-rose-500'>
                      Username should be at least 2 characters.
                    </p>
                  )}
                  <Link to='/login' className='inline transition-colors hover:text-primary'>
                    already have an account?
                  </Link>
                  <div className='relative'>
                    <button
                      className='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center cursor-pointer text-white bg-primary
                  rounded-lg transition duration-200 hover:bg-primary-focus disabled:bg-primary disabled:bg-opacity-70 disabled:cursor-default'
                      disabled={!formIsValid}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <Square className='top-0 left-0 -mt-12 -ml-12 text-yellow-300' />
              <Square className='bottom-0 right-0 -mb-12 -mr-12 text-primary' />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal children={<LoginModal />} />}
    </>
  );
};

export default Signup;
