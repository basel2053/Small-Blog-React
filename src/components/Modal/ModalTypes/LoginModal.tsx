import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginModal = () => {
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (count == 0) {
      return;
    }
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className='card fixed z-30 m-auto inset-x-0 top-[30%] w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Account Created!</h2>
        <p className='my-4'>Your account was created sucessfully, you will be redirected in {count}...</p>
        <p className='mb-2 font-bold text-primary-focus'> Note: Remember to confirm your email to be able to login</p>
        <div className='card-actions justify-end'>
          <Link className='btn btn-primary' to='/login'>
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
