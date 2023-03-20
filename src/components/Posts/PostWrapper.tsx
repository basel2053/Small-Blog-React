import { IPost } from '../../interface/post';
import Post from './Post';

const PostWrapper = (props: { posts: IPost[] }) => {
  return (
    <section className='flex flex-row flex-wrap mx-auto justify-center my-10'>
      {props.posts.length > 0 ? (
        props.posts.map(p => <Post key={p.id} {...p} />)
      ) : (
        <h2 className='font-medium text-xl text-gray-700'>There is no results found...</h2>
      )}
    </section>
  );
};

export default PostWrapper;
