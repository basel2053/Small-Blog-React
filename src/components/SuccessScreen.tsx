import { Link } from 'react-router-dom';
import CheckIcon from './icons/CheckIcon';
import useBlogContext from '../hook/use-blogContext';

const SuccessScreen = () => {
  const { user } = useBlogContext();
  return (
    <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-11/12 sm:w-3/4 bg-white md:w-2/3 lg:w-1/2 2xl:w-1/3 2xl:h-3/5 flex flex-col items-center gap-8 rounded-lg'>
      <CheckIcon />
      <h2 className='text-3xl font-semibold text-center'>Post Submitted Successfully</h2>
      <p className='px-10  text-gray-500 text-lg leading-8'>
        Keep sharing your ideas with us. It's good to have you around in our small community, where everyone shares
        their new ideas, stores, and even projects. So don't stop having fun with us!
      </p>

      <p>You will be redirected to the Home page soon...</p>
      <p>or</p>
      <div className='flex gap-6 mb-6'>
        <Link to={`/profile/${user?.name}`} className='btn btn-outline'>
          Your Profile
        </Link>
        <Link to='/' className='btn px-8'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessScreen;
