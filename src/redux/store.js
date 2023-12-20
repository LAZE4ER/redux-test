import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
