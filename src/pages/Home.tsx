import { useNavigate } from 'react-router-dom';
import useLogout from '../hook/use-logout';
import PostWrapper from '../components/Posts/PostWrapper';
import Pagination from '../components/pagination';
import Stat from '../components/Stat';
import Hero from '../components/Hero/Hero';
import Search from '../components/Search';

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    // ? apply it to the signout button
    await logout();
    navigate('/');
  };
  return (
    <>
      <Hero />
      <Search />
      <PostWrapper />
      <div className='flex flex-col items-center'>
        <Stat />
        <Pagination />
      </div>
    </>
  );
};

export default Home;
