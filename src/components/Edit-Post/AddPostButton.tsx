import { Link } from 'react-router-dom';
import AddIcon from '../icons/AddIcon';

const AddPostButton = () => {
  return (
    <Link
      to='/edit-post'
      className='fixed bottom-[2%] right-[2%] bg-primary flex items-center justify-center p-1 rounded-full border-none hover:bg-primary-focus transition-all h-12 w-12  text-white font-bold cursor-pointer'
    >
      <AddIcon />
    </Link>
  );
};

export default AddPostButton;
