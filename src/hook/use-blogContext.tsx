import { useContext } from 'react';
import BlogContext from '../store/blog-context';

const useBlogContext = () => {
  return useContext(BlogContext);
};

export default useBlogContext;
