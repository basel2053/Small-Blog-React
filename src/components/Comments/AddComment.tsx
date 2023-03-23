import React, { useState } from 'react';
import AirplaneIcon from '../icons/AirplaneIcon';
import useAxiosPrivate from '../../hook/use-axiosPrivate';

const AddComment = (props: { postId?: string; onAddComment: Function }) => {
  const privateHttp = useAxiosPrivate();
  const [comment, setComment] = useState('');
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await privateHttp.post(`comments`, { body: comment, postId: props.postId });
    props.onAddComment(data.comment);
    setComment('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <form className='w-full border rounded px-6 py-8 relative' onSubmit={submitHandler}>
      <label htmlFor='message' className='block mb-2 text-lg font-medium text-gray-800'>
        Your message
      </label>
      <textarea
        id='message'
        rows={5}
        className='block p-2.5 w-full  text-gray-600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none'
        placeholder='Leave a comment...'
        value={comment}
        onChange={changeHandler}
      ></textarea>
      <AirplaneIcon isValid={comment.trim().length > 0} />
    </form>
  );
};

export default AddComment;
