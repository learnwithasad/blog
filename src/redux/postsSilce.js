import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("post")) || [],
};

const postsSilce = createSlice({
  name: "postSilce",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      localStorage.setItem("post", JSON.stringify(state.posts));
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);

      localStorage.setItem("post", JSON.stringify(state.posts));
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((p) => p.id == action.payload.id);

      if (index !== -1) {
        state.posts[index] = action.payload;
      }

      localStorage.setItem("post", JSON.stringify(state.posts));
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSilce.actions;

export default postsSilce.reducer;
