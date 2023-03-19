import Post from './Post';

const PostWrapper = () => {
  return (
    <section className='flex flex-row flex-wrap mx-auto justify-center my-10'>
      {Array(12)
        .fill(1)
        .map(ele => (
          <Post />
        ))}
      {/* <!-- Card Component --> */}
    </section>
  );
};

export default PostWrapper;
