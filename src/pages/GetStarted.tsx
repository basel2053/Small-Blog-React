import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='hero min-h-screen' style={{ backgroundImage: `url("/social.png")` }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md 2xl:max-w-xl'>
          <h1 className='mb-5 text-5xl font-bold 2xl:text-7xl '>Welcome Friend</h1>
          <p className='mb-5 2xl:text-lg'>
            Start sharing your thoughts with awesome people and keep up with our updates and small blog website.
          </p>
          <Link className='btn btn-primary 2xl:px-8 2xl:w-80 w-56  2xl:text-lg' to='/signup'>
            Get Started
          </Link>
          <div>
            <Link className='btn 2xl:px-8 2xl:text-lg mt-6 outline btn-ghost' to='/login'>
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
