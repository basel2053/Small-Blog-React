import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogContext, { BlogContextProvider } from './store/blog-context';
import Home from './pages/Home';

const App = () => {
  const { isLogged } = useContext(BlogContext);

  return (
    <BlogContextProvider>
      <Routes>
        <Route path='/' element={isLogged ? <Home /> : <GetStarted />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BlogContextProvider>
  );
};

export default App;
