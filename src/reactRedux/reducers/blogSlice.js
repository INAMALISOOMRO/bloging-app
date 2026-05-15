import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,

  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;