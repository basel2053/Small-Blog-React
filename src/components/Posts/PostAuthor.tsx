import { Link } from 'react-router-dom';

const PostAuthor = (props: { author?: string }) => {
  return (
    <div className='avatar flex-col items-center gap-3 font-medium'>
      <h4 className='text-primary-focus mt-10'>Author</h4>
      <Link to={`/profile/${props.author}`}>
        <div className='w-24 mask mask-hexagon'>
          <img src='https://picsum.photos/200/300' />
        </div>
        <h4 className=' text-gray-600 text-center capitalize'>{props.author}</h4>
      </Link>
    </div>
  );
};

export default PostAuthor;
