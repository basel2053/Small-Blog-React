import { useNavigate, useSearchParams } from 'react-router-dom';
import useLogout from '../hook/use-logout';
import PostWrapper from '../components/Posts/PostWrapper';
import Pagination from '../components/pagination';
import Stat from '../components/Stat';
import Hero from '../components/Hero/Hero';
import Search from '../components/Search';
import useAxiosPrivate from '../hook/use-axiosPrivate';
import useBlogContext from '../hook/use-blogContext';
import { useEffect, useState } from 'react';

export interface IPagination {
  page: number;
  numberOfPages: number;
  next: boolean;
  prev: boolean;
}

const Home = () => {
  // const navigate = useNavigate();
  // const logout = useLogout();
  // const signOut = async () => {
  //   // ? apply it to the signout button
  //   await logout();
  //   navigate('/');
  // };
  // NOTE  above is logout logic don't forget it
  const privateHttp = useAxiosPrivate();
  const { setPosts } = useBlogContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState<IPagination>({ page: 1, next: false, prev: false, numberOfPages: 1 });
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await privateHttp.get(`filter?page=${searchParams.get('page')}`);
      setPosts(data.posts);
      setCount(data.pagination.postsCount);
      setPagination(data.pagination);
    };
    getAllPosts();
  }, [searchParams]);

  const onPaginate = async (page: number) => {
    setSearchParams({ page: page + '' });
  };

  return (
    <>
      <Hero />
      <Search />
      <PostWrapper />
      <div className='flex flex-col items-center'>
        <Stat postsCount={count} />
        {pagination.numberOfPages > 1 && <Pagination {...pagination} onPaginate={onPaginate} />}
      </div>
    </>
  );
};

export default Home;
