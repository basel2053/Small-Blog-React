import { Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BlogContextProvider } from './store/blog-context';
import Home from './pages/Home';
import useAuth from './hook/use-auth';
import RequireAuth from './components/RequireAuth';
import PresistenceLogin from './token/PresistenceLogin';

const App = () => {
  const { isLogged } = useAuth();

  return (
    <BlogContextProvider>
      <Routes>
        <Route path='/' element={isLogged ? <Home /> : <GetStarted />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* HERE  put our protected routes  inside presistenceLogin and requireAuth*/}
        <Route element={<PresistenceLogin />}>{/* <Route element={<RequireAuth/>}></Route> */}</Route>
      </Routes>
    </BlogContextProvider>
  );
};

export default App;
