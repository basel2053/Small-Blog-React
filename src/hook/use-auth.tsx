import { useContext } from 'react';
import BlogContext from '../store/blog-context';

const useAuth = () => {
  return useContext(BlogContext);
};

export default useAuth;
