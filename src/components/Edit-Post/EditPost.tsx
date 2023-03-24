import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPrivate from '../../hook/use-axiosPrivate';
import SuccessScreen from '../SuccessScreen';
import { useEffect, useState } from 'react';
import Tiptap from '../Tiptap/Tiptap';

interface IData {
  title: string;
  description: string;
  image: any;
  field: string;
}

const fields = [
  'Web Programming',
  'Embedded System',
  'Cyber Security',
  'Mobile Development',
  'DevOps',
  'Cloud Architect',
  'Software Testing',
  'Data Analytics & Visualization',
  'UI/UX',
  'System Admin',
];

const EditPost = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const privateHttp = useAxiosPrivate();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const id = searchParams.get('edit');
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      image: null,
      field: '',
      description: '',
    },
  });
  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const { data } = await privateHttp.get(`posts/${id}`);
        setValue('title', data.post.title);
        setValue('field', data.post.field);
        setValue('description', data.post.description);
      };
      getPost();
    }
  }, []);

  const onSubmit = async (data: IData) => {
    setShowSuccess(true);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('field', data.field);
    if (data.image) formData.append('image', data.image[0]);
    formData.append('description', data.description);
    reset({ title: '', description: '' });
    id ? await privateHttp.patch(`posts/${id}`, formData) : await privateHttp.post(`posts`, formData);
    setTimeout(() => {
      navigate('/');
    }, 3500);
  };

  return (
    <>
      {showSuccess && <SuccessScreen />}
      <h1 className='text-center text-4xl font-bold mt-10'>{id ? 'Got a change!' : 'Share your thoughts'}</h1>
      <form className='my-10 w-3/4 m-auto flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', {
            required: 'This is required.',
            minLength: { value: 3, message: 'Title should be at least 3 characters.' },
            maxLength: { value: 50, message: 'Title should be at most 50 characters.' },
          })}
          type='text'
          placeholder='Post Title'
          className='input input-bordered w-full max-w-xs 2xl:max-w-lg text-gray-600 mt-6'
        />
        <p className='text-rose-500 mt-1'>{errors.title?.message}</p>
        <select
          {...register('field', { required: 'Select one option' })}
          className='select select-bordered w-full max-w-xs 2xl:max-w-lg mt-6'
          defaultValue=''
        >
          <option disabled value=''>
            Choose Programming Field
          </option>
          {fields.map(f => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <p className='text-rose-500 mt-1'>{errors.field?.message}</p>
        <input
          {...register('image', {
            required: id ? false : 'This is required.',
          })}
          type='file'
          className='file-input file-input-bordered file-input-primary w-full max-w-xs 2xl:max-w-lg mt-6'
        />
        <p className='text-rose-500 mt-1'>{errors.image?.message}</p>
        <textarea
          {...register('description', {
            required: 'This is required.',
            minLength: { value: 16, message: 'Description should be at least 16 characters.' },
          })}
          placeholder='Post Description...'
          className='textarea textarea-bordered textarea-lg w-full max-w-xs 2xl:max-w-lg min-h-[261px] text-gray-600 mt-6'
        ></textarea>
        <p className='text-rose-500 mt-1'>{errors.description?.message}</p>
        <button className='btn btn-primary text-xl px-10 mt-4 text-white'>{id ? 'Edit Post' : 'Submit'}</button>
      </form>
      <Tiptap />
    </>
  );
};

export default EditPost;
