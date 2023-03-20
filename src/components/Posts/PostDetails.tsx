import { useParams } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hook/use-axiosPrivate';
import { IPost } from '../../interface/post';
import { baseURL } from '../../api/axios';

const PostDetails = () => {
  const { id } = useParams();
  const privateHttp = useAxiosPrivate();
  const [post, setPost] = useState<IPost>();
  useEffect(() => {
    const getPost = async () => {
      const { data } = await privateHttp.get(`posts/${id}`);
      setPost(data.post);
    };
    getPost();
  }, []);

  return (
    <>
      <div className='absolute bg-neutral text-white font-medium clipped-note py-1 pr-10 pl-2 top-[16%]'>
        <h4>{post?.readtime} minutes</h4>
      </div>
      <div className='mx-16 my-10 flex flex-col items-center'>
        <h2 className='text-center text-3xl mb-4'>
          {post?.title} <span className='text-gray-600 text-2xl'>|</span>
          <span className=' text-2xl text-primary-focus uppercase'> {post?.field}</span>
        </h2>
        <h4 className='text-center text-gray-400 mb-10'>{post?.createdat}</h4>
        <div className='text-center  mb-10 pb-4'>
          <img src={post?.image && `${baseURL}${post?.image}`} alt={post?.title} className='rounded inline-block' />
        </div>
        <p className='height leading-7 px-[8%] text-gray-600 first-letter:text-gray-800 mb-10 text-xl'>
          {post?.description}
        </p>
        <PostAuthor author={post?.author} />
      </div>
    </>
  );
};

export default PostDetails;
