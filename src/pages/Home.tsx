import { useLocation, useSearchParams } from 'react-router-dom';
import PostWrapper from '../components/Posts/PostWrapper';
import Pagination from '../components/pagination';
import Stat from '../components/Stat';
import Hero from '../components/Hero/Hero';
import Search from '../components/Search';
import useAxiosPrivate from '../hook/use-axiosPrivate';
import useBlogContext from '../hook/use-blogContext';
import { useEffect, useState } from 'react';
import AddPostButton from '../components/Edit-Post/AddPostButton';

export interface IPagination {
  page: number;
  numberOfPages: number;
  next: boolean;
  prev: boolean;
}

const Home = () => {
  const privateHttp = useAxiosPrivate();
  const { posts, setPosts } = useBlogContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState<IPagination>({ page: 1, next: false, prev: false, numberOfPages: 1 });
  const [count, setCount] = useState<number>(0);
  const params = useLocation().search;
  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await privateHttp.get(`filter${params}`);
      setPosts(data.posts);
      setCount(data.pagination.postsCount);
      setPagination(data.pagination);
    };
    getAllPosts();
  }, [searchParams]);

  const onPaginate = async (page: number) => {
    searchParams.set('page', page + '');
    setSearchParams(searchParams);
  };

  return (
    <>
      <Hero />
      <Search />
      <PostWrapper posts={posts} />
      <div className='flex flex-col items-center'>
        <Stat postsCount={count} />
        {pagination.numberOfPages > 1 && <Pagination {...pagination} onPaginate={onPaginate} />}
      </div>
      <AddPostButton />
    </>
  );
};

export default Home;
