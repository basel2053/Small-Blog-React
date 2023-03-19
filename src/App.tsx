import { Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import useBlogContext from './hook/use-blogContext';
import RequireAuth from './components/RequireAuth';
import PresistenceLogin from './token/PresistenceLogin';
import PostDetails from './components/Posts/PostDetails';
import Profile from './components/Profile/Profile';

const App = () => {
  const { user } = useBlogContext();

  return (
    <Routes>
      <Route element={<PresistenceLogin />}>
        <Route element={<RequireAuth />}>
          {user?.accessToken && <Route path='/' element={<Home />} />}
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Route>
        <Route path='/' element={<GetStarted />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      {/* HERE  put our protected routes  inside presistenceLogin and requireAuth*/}
      {/* <Route element={<PresistenceLogin />}></Route> */}
    </Routes>
  );
};

export default App;
