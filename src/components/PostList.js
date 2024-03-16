import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../slices/postsSlice';

const PostList = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
