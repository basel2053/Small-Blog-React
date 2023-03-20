import useBlogContext from '../../hook/use-blogContext';
import Post from './Post';

const PostWrapper = () => {
  const { posts } = useBlogContext();
  return (
    <section className='flex flex-row flex-wrap mx-auto justify-center my-10'>
      {posts.length > 0 ? (
        posts.map(p => <Post key={p.id} {...p} />)
      ) : (
        <h2 className='font-medium text-xl text-gray-700'>There is no posts yet...</h2>
      )}
    </section>
  );
};

export default PostWrapper;
