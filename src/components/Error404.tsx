import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='text-center'>
      <div className='bg-primary h-10 w-full text-left px-14 py-0'>
        <Link to='/' className=' text-white text-3xl font-bold '>
          Beanzo
        </Link>
      </div>
      <h1 className='text-primary font-mono text-7xl font-bold mt-16'>Error 404</h1>
      <h2 className='text-gray-600 font-mono text-4xl font-bold mt-4 dark:text-gray-300'>Ooops...</h2>
      <h2 className='text-gray-600 font-mono text-4xl font-bold mt-2 dark:text-gray-300'>Page not Found..!</h2>
      <Link to='/' className='btn btn-outline btn-primary hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 '>
        Return to home
      </Link>
      <img src='/ezgif-2-5504e903a6.png' alt='error-img' className=' m-auto' width='565px' />
      <div className='bg-neutral h-9 w-full'></div>
    </div>
  );
};

export default Error404;
