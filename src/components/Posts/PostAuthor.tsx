import { Link } from 'react-router-dom';

const PostAuthor = () => {
  return (
    <div className='avatar flex-col items-center gap-3 font-medium'>
      <h4 className='text-primary-focus'>Author</h4>
      <Link to='/profile/4'>
        <div className='w-24 mask mask-hexagon'>
          <img src='https://picsum.photos/200/300' />
        </div>
        <h4 className=' text-gray-600'>Bassel Salah</h4>
      </Link>
    </div>
  );
};

export default PostAuthor;
