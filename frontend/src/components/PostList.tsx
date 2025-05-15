import { Post } from '../data/dummyData';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>Autor: {post.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;