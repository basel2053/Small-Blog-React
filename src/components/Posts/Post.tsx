import { Link } from 'react-router-dom';
import { IPost } from '../../interface/post';
import EditIcon from '../icons/EditIcon';
import TrashIcon from '../icons/TrashIcon';
import useBlogContext from '../../hook/use-blogContext';
import UserAvatar from '../UserAvatar';

const colorify: any = {
  'Web Programming': 'text-primary-focus',
  'Embedded System': 'text-teal-500',
  'Cyber Security': 'text-rose-500',
  'Mobile Development': 'text-indigo-500',
  DevOps: 'text-amber-500',
  'Cloud Architect': 'text-sky-500',
  'Software Testing': 'text-lime-500',
  'Data Analytics & Visualization': 'text-purple-500',
  'UI/UX': 'text-pink-500',
  'System Admin': 'text-orange-500',
};

const Post = (props: IPost) => {
  const { user } = useBlogContext();

  return (
    <div className='transition-all duration-150 flex  w-full px-4 py-6 md:w-1/2 lg:w-[32%] 2xl:w-[31%]'>
      <div className='flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl'>
        <div className='md:flex-shrink-0'>
          <img
            src={`${props.image}`}
            alt={props.title}
            className='object-fill w-full rounded-lg rounded-b-none md:h-56'
          />
        </div>
        <div className='flex items-center justify-between px-4 py-2 overflow-hidden'>
          <span className={`text-xs font-medium ${colorify[props.field]} uppercase`}>{props.field}</span>
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
          <Link to={`/posts/${props.id}`} className='hover:underline'>
            <h2 className='text-2xl font-bold tracking-normal text-gray-800'>{props.title}</h2>
          </Link>
        </div>
        <hr className='border-gray-300' />
        <p className='flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700'>
          {`${props.description}...`}
        </p>
        <hr className='border-gray-300' />
        <section className='px-4 py-2 mt-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center flex-1'>
              <div className='mask mask-circle'>
                <UserAvatar name={props.author} size={40} />
              </div>
              <div className='flex flex-col mx-2'>
                <Link
                  to={`/profile/${props.author}`}
                  className='font-semibold text-gray-700 hover:underline capitalize'
                >
                  {props.author}
                </Link>
                <span className='mx-1 text-xs text-gray-600'>{props.createdat}</span>
              </div>
              {props.author === user?.name && (
                <div className='ml-auto flex gap-4'>
                  <EditIcon id={props.id} />
                  <TrashIcon id={props.id} title={props.title} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
