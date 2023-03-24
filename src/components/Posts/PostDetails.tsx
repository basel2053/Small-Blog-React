import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import PostAuthor from './PostAuthor';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hook/use-axiosPrivate';
import { IPost } from '../../interface/post';
import { baseURL } from '../../api/axios';
import { IComment } from '../../interface/comment';
import Comment from '../Comments/Comment';
import AddComment from '../Comments/AddComment';

const PostDetails = () => {
  const { id } = useParams();
  const privateHttp = useAxiosPrivate();
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await privateHttp.get(`posts/${id}`);
      setPost(data.post);
      setComments(data.comments);
    };
    getPost();
  }, []);

  const onAddComment = (comment: IComment) => {
    setComments(prevComments => [...prevComments, comment]);
  };
  const onDeleteComment = (id: number) => {
    setComments(prevComments => prevComments.filter(c => c.id !== id));
  };
  return (
    <>
      <div className='absolute bg-neutral text-white font-medium clipped-note py-1 pr-10 pl-2 top-[16%]'>
        <h4>{post?.readtime} minutes</h4>
      </div>
      <div className='mx-16 my-10 flex flex-col items-center'>
        <h2 className='text-center text-4xl mb-4'>
          {post?.title} <span className='text-gray-600 text-3xl'>|</span>
          <span className=' text-3xl text-primary-focus uppercase'> {post?.field}</span>
        </h2>
        <h4 className='text-center text-gray-400 mb-10'>{post?.createdat}</h4>
        <div className='text-center  mb-10 pb-4'>
          <img src={post?.image && `${baseURL}${post?.image}`} alt={post?.title} className='rounded inline-block' />
        </div>
        <div className='w-3/4 text-gray-600 mb-10 text-xl bg-transparent border-t-0 ProseMirror'>
          {parse(post?.description + '')}
        </div>
        <PostAuthor author={post?.author} />
      </div>
      <div className='w-3/4 h-5 border-b border-b-primary-focus  text-center mb-12 m-auto'>
        <span className='text-3xl font-semibold text-gray-700 bg-white px-4'>Comments</span>
      </div>
      <ul className='flex flex-col items-center justify-center w-3/4 m-auto px-2 mb-8'>
        {comments.length > 0 ? (
          comments?.map(c => <Comment key={c.id} comment={c} onDelete={onDeleteComment} postAuthor={post?.author} />)
        ) : (
          <h2 className='mb-6 text-gray-700 font-medium text-xl'>Be the first to leave a comment..</h2>
        )}
        <AddComment postId={id} onAddComment={onAddComment} />
      </ul>
    </>
  );
};

export default PostDetails;
