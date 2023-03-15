import { useNavigate } from 'react-router-dom';
import useLogout from '../hook/use-logout';

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    // ? apply it to the signout button
    await logout();
    navigate('/');
  };
  return <h1>Hey this is home</h1>;
};

export default Home;
