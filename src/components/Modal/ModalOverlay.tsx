import { useEffect, useState } from 'react';

const ModalOverlay = () => {
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
  console.log(count);

  return (
    <div className='card fixed z-30 m-auto inset-x-0 top-[30%] w-1/3 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Account Created!</h2>
        <p className='my-4'>Your account was created sucessfully, you will be redirected in {count}...</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Login Now</button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
