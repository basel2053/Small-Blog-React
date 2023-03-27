const GoogleButton = (props: { loginHandler: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      className='max-w-xs h-11 bg-[#4285f4] rounded mb-3 cursor-pointer shadow hover:shadow-[ 0 0 6px #4285f4] active:bg-[#1669F2]'
      onClick={props.loginHandler}
    >
      <div className=' absolute mt-[1px] ml-[1px] h-[42px] w-11 rounded bg-white'>
        <img
          className='google-icon absolute mt-3 ml-3 h-5 w-5'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
        />
      </div>
      <p className=' pt-2 text-white '>
        <b>Sign in with google</b>
      </p>
    </div>
  );
};

export default GoogleButton;
