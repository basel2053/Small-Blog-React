import React, { useState } from 'react';
import { IPost } from '../interface/post';
import { IUser } from '../interface/user';

const BlogContext = React.createContext({
  user: undefined as Partial<IUser> | undefined,
  setUser: '' as any,
  posts: [] as IPost[],
  setPosts: '' as any,
});

export const BlogContextProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<IUser> | undefined>();
  const [posts, setPosts] = useState<IPost[]>([]);

  return <BlogContext.Provider value={{ user, setUser, posts, setPosts }}>{props.children}</BlogContext.Provider>;
};

export default BlogContext;
