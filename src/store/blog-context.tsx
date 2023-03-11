import React, { useEffect, useState } from 'react';

const BlogContext = React.createContext({
  isLogged: false,
  posts: [],
  onLogin: (data: { token: string; userId: string }) => {},
  onLogout: () => {},
});

export const BlogContextProvider = (props: { children: React.ReactNode }) => {
  const [isLogged, setIsLoggedIn] = useState(false);
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

  return <BlogContext.Provider value={{ isLogged }}>{props.children}</BlogContext.Provider>;
};

export default BlogContextProvider;
