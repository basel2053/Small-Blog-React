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
import EditPost from './components/Edit-Post/EditPost';
import Error404 from './components/Error404';
import Forgot from './pages/Forgot';

const App = () => {
  const { user } = useBlogContext();

  return (
    <Routes>
      <Route element={<PresistenceLogin />}>
        <Route element={<RequireAuth />}>
          {user?.accessToken && <Route path='/' element={<Home />} />}
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:author' element={<Profile />} />
          <Route path='/edit-post' element={<EditPost />} />
        </Route>
        <Route path='/' element={<GetStarted />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot' element={<Forgot />} />
      <Route path='*' element={<Error404 />} />

      {/* HERE  put our protected routes  inside presistenceLogin and requireAuth*/}
      {/* <Route element={<PresistenceLogin />}></Route> */}
    </Routes>
  );
};

export default App;
