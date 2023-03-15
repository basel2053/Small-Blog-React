import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Square from '../components/Square';
import useInput from '../hook/use-input';
import useHttp from '../hook/use-http';

const Signup = () => {
  // ! this variable may be used to display a msg to user incase we got some response from backend
  //  const [submitMsg, setSubmitMsg] = useState('');
  const emailInput = useInput((val: string) => val.includes('@') && val.length > 4);
  const passwordInput = useInput((val: string) => val.length >= 6 && val.length <= 16);
  const confirmInput = useInput((val: string) => val === passwordInput.value);
  const nameInput = useInput((val: string) => val.trim() !== '');
  const navigate = useNavigate();

  let formIsValid = false;
  if (emailInput.isValid && passwordInput.isValid && confirmInput.isValid) {
    formIsValid = true;
  }

  const registerHandler = async () => {
    const user = {
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmInput.value,
      name: nameInput.value,
    };
    // useHttp(user, 'users/signup', 'POST');
  };

  return (
    <div className='bg-white relative lg:py-20'>
      <div
        className='flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row'
      >
        <div className='flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row'>
          <div className='w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12'>
            <div className='flex flex-col items-center justify-center w-full h-full relative lg:pr-10'>
              <img src='/Run_-_Health_qcghbu.png' className='btn-' />
            </div>
          </div>
          <div className='w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12'>
            <div
              className='flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10'
            >
              <p className='w-full text-4xl font-medium text-center leading-snug font-serif'>Sign up for an account</p>
              <div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
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
                  name='Name'
                  placeholder='John'
                  type='text'
                  value={nameInput.value}
                  onChange={nameInput.inputChangeHandler}
                  onBlur={nameInput.inputBlurHandler}
                />
                <Link to='/login' className='inline transition-colors hover:text-primary'>
                  already have an account?
                </Link>
                <div className='relative'>
                  <button
                    className='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center cursor-pointer text-white bg-primary
                  rounded-lg transition duration-200 hover:bg-primary-focus disabled:bg-primary disabled:bg-opacity-70 disabled:cursor-default'
                    disabled={!formIsValid}
                    onClick={registerHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <Square className='top-0 left-0 -mt-12 -ml-12 text-yellow-300' />
            <Square className='bottom-0 right-0 -mb-12 -mr-12 text-primary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
