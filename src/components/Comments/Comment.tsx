import { Link } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import UserAvatar from '../UserAvatar';
import CommentOptions from './CommentOptions';
import { IComment } from '../../interface/comment';
import useBlogContext from '../../hook/use-blogContext';
import useAxiosPrivate from '../../hook/use-axiosPrivate';

const Comment = (props: { comment: IComment; onDelete: Function; postAuthor?: string }) => {
  const { user } = useBlogContext();
  const privateHttp = useAxiosPrivate();

  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(props.comment.body);

  const onDelete = (id: number) => {
    props.onDelete(id);
  };

  const onStartEdit = () => {
    setIsEditing(!isEditing);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await privateHttp.patch(`comments/${props.comment.id}`, { body: comment });
    setIsEditing(false);
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
            onStartEdit={onStartEdit}
            isCommentAuthor={user?.name === props.comment.author}
          />
        )}
      </div>
      {!isEditing ? (
        <p className='mt-4 mb-2 text-gray-700 text-lg'>{comment}</p>
      ) : (
        <form className='relative' onSubmit={submitHandler}>
          <textarea
            className='w-full text-gray-700 text-lg p-2 mt-2 border border-gray-400 rounded focus:outline-none'
            value={comment}
            onChange={changeHandler}
          ></textarea>
          <button className='btn btn-outline btn-primary absolute top-1/4 right-12 '>Edit</button>
        </form>
      )}
    </li>
  );
};

export default Comment;
