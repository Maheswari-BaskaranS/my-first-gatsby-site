import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    updatePost(state, action) {
      const { id, title, body } = action.payload;
      const postToUpdate = state.posts.find(post => post.id === id);
      if (postToUpdate) {
        postToUpdate.title = title;
        postToUpdate.body = body;
      }
    },
    deletePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
