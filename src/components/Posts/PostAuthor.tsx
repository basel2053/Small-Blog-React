import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar';

const PostAuthor = (props: { author?: string }) => {
  return (
    <div className='avatar flex-col items-center gap-3 font-medium'>
      <h4 className='text-primary-focus mt-10'>Author</h4>
      <Link to={`/profile/${props.author}`}>
        <div className='mask mask-hexagon'>
          <UserAvatar size={120} name={props.author} />
        </div>
        <h4 className=' text-gray-600 text-center capitalize'>{props.author}</h4>
      </Link>
    </div>
  );
};

export default PostAuthor;
