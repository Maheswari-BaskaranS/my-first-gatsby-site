import * as React from "react";
import Layout from "./Layout";
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost } from '../slices/postsSlice';
import "./index.css";

const IndexPage = () => {
    const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(
      addPost({
        id: Math.random().toString(),
        title: 'New Post',
        body: 'Hi all. Nice to see you!!',
      })
    );
  };

  const handleDeletePost = id => {
    dispatch(deletePost(id));
  };
  return (
     
    <Layout className='Home'>
      <h1>Home</h1>
      <p>This is my first app of Gatsby</p>
    

<h1>Posts</h1>
    <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map(post => (
           <li key={post.id}>
             <h2>{post.title}</h2>
             <p>{post.body}</p>
             <button onClick={() => handleDeletePost(post.id)}>Delete</button>
           </li>
         ))}
       </ul>
       </Layout>
    
  );
};

export default IndexPage;


