import { useParams } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import useAxiosPrivate from '../../hook/use-axiosPrivate';
import { useEffect, useState } from 'react';
import PostWrapper from '../Posts/PostWrapper';
import useBlogContext from '../../hook/use-blogContext';
import AirplaneIcon from '../icons/AirplaneIcon';
import PenIcon from '../icons/PenIcon';

const Profile = () => {
  const { author } = useParams();
  const privateHttp = useAxiosPrivate();
  const { posts, setPosts, user } = useBlogContext();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('');

  useEffect(() => {
    const getPost = async () => {
      const { data } = await privateHttp.get(`users/${author}`);
      setPosts(data.posts);
      setBio(data.author.bio);
    };
    getPost();
  }, [author]);

  const editBioHandler = () => {
    setIsEditing(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await privateHttp.patch(`users/${user?.id}`, { bio });
    setIsEditing(false);
  };

  return (
    <>
      <div className='m-auto border-2 rounded-xl shadow-md w-11/12 sm:w-2/3 md:w-1/2 xl:w-1/3 text-center my-10'>
        <ProfilePicture size={200} author={author} />
        <h1 className='text-3xl capitalize font-bold mb-6'>{author}</h1>
        {!isEditing ? (
          <p className='text-gray-500 mb-6 leading-6 px-4'>
            {bio
              ? bio
              : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nesciunt animi fugit vitae. Ratione,
            ullam.`}
            {user?.name === author && (
              <button onClick={editBioHandler}>
                <PenIcon />
              </button>
            )}
          </p>
        ) : (
          <form className='relative' onSubmit={submitHandler}>
            <textarea
              rows={4}
              className='block p-2.5 w-11/12 m-auto text-sm text-gray-600 rounded-md border mb-4 border-gray-300 focus:ring-primary focus:border-primary focus:outline-none'
              placeholder='Write your thoughts here...'
              onChange={changeHandler}
              value={bio}
            ></textarea>
            <AirplaneIcon bpos={'bottom-12'} />
          </form>
        )}

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
      <div className='mx-6 sm:mx-14'>
        <hr className='mb-6' />
        <h2 className='text-3xl  font-bold mb-6'>
          Lastest Posts by <span className='capitalize'>{author}</span>
        </h2>
        <PostWrapper posts={posts} />
      </div>
    </>
  );
};

export default Profile;
