import useAxiosPrivate from '../../../hook/use-axiosPrivate';
import useBlogContext from '../../../hook/use-blogContext';
import { IPost } from '../../../interface/post';

const ConfirmationModal = (props: { onCloseModal?: Function; id?: number; title: string }) => {
  const privateHttp = useAxiosPrivate();
  const { setPosts } = useBlogContext();

  const deletePostHandler = async () => {
    await privateHttp.delete(`posts/${props.id}`);
    setPosts((prevPosts: IPost[]) => prevPosts.filter(p => p.id !== props.id));
    if (props.onCloseModal) props.onCloseModal();
  };

  return (
    <div className='card fixed z-30 m-auto inset-x-0 top-[30%] w-3/4 sm:w-2/3 md:w-1/3 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-2xl'>Warning!</h2>
        <p className='my-4 font-medium text-gray-600'>Are you sure you want to delete the post " {props.title} "</p>
        <div className='card-actions justify-end'>
          <button className='btn' onClick={props.onCloseModal as React.MouseEventHandler}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={deletePostHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
