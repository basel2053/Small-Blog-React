import useAxiosPrivate from '../../hook/use-axiosPrivate';
import EllipsisIcon from '../icons/EllipsisIcon';

const CommentOptions = (props: {
  id?: number;
  onDelete: Function;
  onStartEdit: Function;
  isCommentAuthor: boolean;
}) => {
  const privateHttp = useAxiosPrivate();

  const deleteHandler = async () => {
    await privateHttp.delete(`comments/${props.id}`);
    props.onDelete(props.id);
  };

  const editHandler = () => {
    props.onStartEdit();
  };

  return (
    <div className='dropdown dropdown-left lg:dropdown-right ml-auto mr-4'>
      <label tabIndex={0}>
        <EllipsisIcon />
      </label>
      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36'>
        {props.isCommentAuthor && (
          <li className=' transition-colors hover:bg-primary '>
            <button className='hover:text-white' onClick={editHandler}>
              Edit
            </button>
          </li>
        )}
        <li className='transition-colors hover:bg-primary'>
          <button className='hover:text-white' onClick={deleteHandler}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CommentOptions;
