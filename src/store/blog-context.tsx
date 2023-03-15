import React, { useEffect, useState } from 'react';
import { IPost } from '../interface/post';

const BlogContext = React.createContext({
  isLogged: false,
  posts: [] as IPost[],
  onLogin: (data: { token: string; userId: string }) => {},
  onLogout: () => {},
});

export const BlogContextProvider = (props: { children: React.ReactNode }) => {
  const [isLogged, setIsLoggedIn] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getLogged = localStorage.getItem('isLogged');
    if (getLogged) {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const loginHandler = (data: { token: string; userId: string }) => {
    setIsLoggedIn(true);
  };

  return (
    <BlogContext.Provider value={{ isLogged, posts, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
