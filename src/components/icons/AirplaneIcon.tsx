const AirplaneIcon = (props: { isValid?: boolean; bpos: string }) => {
  return (
    <button
      disabled={props.isValid === false}
      className=' transition-colors active:text-primary disabled:text-gray-400'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`w-7 h-7 cursor-pointer absolute right-8 ${props.bpos}`}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
        />
      </svg>
    </button>
  );
};

export default AirplaneIcon;
