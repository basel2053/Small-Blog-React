import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar';
import CommentOptions from './CommentOptions';
import { IComment } from '../../interface/comment';
import moment from 'moment';
import useBlogContext from '../../hook/use-blogContext';

const Comment = (props: { comment: IComment; onDelete: Function; postAuthor?: string }) => {
  const { user } = useBlogContext();

  const onDelete = (id: number) => {
    props.onDelete(id);
  };

  return (
    <li className='list-none border rounded-lg mb-5 p-4 w-full'>
      <div className='flex items-center gap-3'>
        <div className='avatar'>
          <div className=' rounded-full'>
            <UserAvatar name={props.comment.author} />
          </div>
        </div>
        <Link to={`/profile/${props.comment.author}`} className='font-medium text-gray-700 text-lg'>
          {props.comment.author}
        </Link>
        <span className='ml-1 text-gray-500 font-normal text-base'>{`${moment(
          +props.comment.createdat
        ).fromNow()}`}</span>

        {(user?.name === props.postAuthor || user?.name === props.comment.author) && (
          <CommentOptions
            id={props.comment.id}
            onDelete={onDelete}
            isCommentAuthor={user?.name === props.comment.author}
          />
        )}
      </div>
      <p className='mt-4 mb-2 text-gray-700 text-lg'>{props.comment.body}</p>
      {/* <form className='relative '>
        <textarea
          className='w-full text-gray-700 text-lg p-2 mt-2 border border-gray-400 rounded focus:outline-none'
          autoFocus={true}
          defaultValue={props.comment.body}
        ></textarea>
        <button className='btn btn-outline btn-primary absolute top-1/4 right-12 '>Edit</button>
      </form> */}
    </li>
  );
};

export default Comment;
