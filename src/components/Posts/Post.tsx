import { Link } from 'react-router-dom';
import { IPost } from '../../interface/post';
import { baseURL } from '../../api/axios';

const Post = (props: IPost) => {
  return (
    <div className='transition-all duration-150 flex  w-full px-4 py-6 md:w-1/2 lg:w-[32%] '>
      <div className='flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl'>
        <div className='md:flex-shrink-0'>
          <img
            src={`${baseURL}${props.image}`}
            alt={props.title}
            className='object-fill w-full rounded-lg rounded-b-none md:h-56'
          />
        </div>
        <div className='flex items-center justify-between px-4 py-2 overflow-hidden'>
          <span className='text-xs font-medium text-primary-focus uppercase'>{props.field}</span>
          <div className='flex flex-row items-center'>
            <div className='text-xs font-medium text-gray-500 flex flex-row items-center mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 mr-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
              <span>{props.readtime} minutes read</span>
            </div>
          </div>
        </div>
        <hr className='border-gray-300' />
        <div className='flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto'>
          <Link to='/posts/2' className='hover:underline'>
            <h2 className='text-2xl font-bold tracking-normal text-gray-800'>{props.title}</h2>
          </Link>
        </div>
        <hr className='border-gray-300' />
        <p className='flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni fugiat, odit incidunt necessitatibus aut
          nesciunt exercitationem aliquam id voluptatibus quisquam maiores officia sit amet accusantium aliquid quo
          obcaecati quasi.
        </p>
        <hr className='border-gray-300' />
        <section className='px-4 py-2 mt-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center flex-1'>
              <img
                className='object-cover h-10 rounded-full'
                src='https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'
                alt='Avatar'
              />
              <div className='flex flex-col mx-2'>
                <Link to='/profile/4' className='font-semibold text-gray-700 hover:underline'>
                  {props.author}
                </Link>
                <span className='mx-1 text-xs text-gray-600'>{props.createdat}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
