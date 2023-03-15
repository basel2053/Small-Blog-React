import Input from '../components/Input';
import useInput from '../hook/use-input';

const Login = () => {
  const emailInput = useInput((val: string) => val.includes('@') && val.length > 4);
  const passwordInput = useInput((val: string) => val.length >= 6 && val.length <= 16);
  let formIsValid = false;
  if (emailInput.isValid && passwordInput.isValid) {
    formIsValid = true;
  }
  return (
    <div className='min-h-screen bg-base-100 flex justify-center items-center'>
      <div className='absolute w-60 h-60 rounded-xl bg-primary -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
      <div className='absolute w-48 h-48 rounded-xl bg-primary  right-6 bottom-10 transform rotate-12 hidden md:block'></div>
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <div>
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
          <button
            className='py-3 w-full text-xl text-white cursor-pointer bg-primary rounded-lg transition-colors hover:bg-primary-focus disabled:cursor-default disabled:bg-primary disabled:bg-opacity-80'
            disabled={!formIsValid}
          >
            Login
          </button>
          <p className='mt-4 text-sm'>
            Forgot your password? <span className='underline cursor-pointer'> forget password</span>
          </p>
        </div>
      </div>
      <div className='w-40 h-40 absolute bg-primary rounded-full top-0 right-12 hidden md:block'></div>
      <div className='w-20 h-40 absolute bg-primary rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
    </div>
  );
};

export default Login;
