const PostAuthor = () => {
  return (
    <div className='avatar flex-col items-center gap-3 font-medium'>
      <h4 className='text-gray-600'>Author</h4>
      <div className='w-24 mask mask-hexagon'>
        <img src='https://picsum.photos/200/300' />
      </div>
      <h4 className='text-primary-focus'>Bassel Salah</h4>
    </div>
  );
};

export default PostAuthor;
