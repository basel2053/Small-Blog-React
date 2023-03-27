const ConfirmMessage = () => {
  return (
    <div className='absolute top-[10%] w-11/12 sm:w-3/4 md:w-1/2 left-1/2 lg:w-1/3 2xl:max-w-max -translate-x-1/2 -translate-y-1/2 z-10'>
      <div className='alert  alert-success text-white shadow-lg '>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Your E-mail has been confirmed sucessfully!</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;
