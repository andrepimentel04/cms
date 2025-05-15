import { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { Post, posts as initialPosts } from '../data/dummyData';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handlePostCreated = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Gerenciar Posts</h1>
      <PostForm onPostCreated={handlePostCreated} />
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;