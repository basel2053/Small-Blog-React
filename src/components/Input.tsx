type TInput = 'number' | 'password' | 'text';
const Input = (props: { name: string; placeholder: string; type: TInput }) => {
  return (
    <div className='relative'>
      <p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>
        {props.name}
      </p>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className='border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
      />
    </div>
  );
};

export default Input;
