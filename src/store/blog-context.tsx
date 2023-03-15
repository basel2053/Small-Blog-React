import React, { useEffect, useState } from 'react';
import { IPost } from '../interface/post';
import { IUser } from '../interface/user';

const BlogContext = React.createContext({
  isLogged: undefined as Partial<IUser> | undefined,
  posts: [] as IPost[],
  setIsLoggedIn: '' as any,
});

export const BlogContextProvider = (props: { children: React.ReactNode }) => {
  const [isLogged, setIsLoggedIn] = useState<Partial<IUser> | undefined>();
  const [posts, setPosts] = useState<IPost[]>([]);

  return <BlogContext.Provider value={{ isLogged, posts, setIsLoggedIn }}>{props.children}</BlogContext.Provider>;
};

export default BlogContext;
