import { useParams } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import useAxiosPrivate from '../../hook/use-axiosPrivate';
import { useEffect, useState } from 'react';
import PostWrapper from '../Posts/PostWrapper';
import useBlogContext from '../../hook/use-blogContext';

const Profile = () => {
  const { author } = useParams();
  const privateHttp = useAxiosPrivate();
  // const [authorInfo, setAuthorInfo] = useState<IUserPosts[]>([]);
  const { posts, setPosts } = useBlogContext();

  useEffect(() => {
    const getPost = async () => {
      const { data } = await privateHttp.get(`users/${author}`);
      setPosts(data.author);
    };
    getPost();
  }, []);

  return (
    <>
      <div className='m-auto border-2 rounded-xl shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 text-center my-10'>
        <ProfilePicture />
        <h1 className='text-3xl capitalize font-bold mb-6'>{posts[0]?.author}</h1>
        <p className='text-gray-500 mb-6 leading-6 px-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nesciunt animi fugit vitae. Ratione,
          ullam.
        </p>
        <button className='btn gap-2 btn-primary text-white mb-6'>
          Connect
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </button>
      </div>
      <div className='mx-14'>
        <hr className='mb-6' />
        <h2 className='text-3xl  font-bold mb-6'>
          Lastest Posts by <span className='capitalize'>{posts[0]?.author}</span>
        </h2>
        <PostWrapper posts={posts} />
      </div>
    </>
  );
};

export default Profile;
