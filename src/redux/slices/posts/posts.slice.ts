import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../api/types";

interface InitialState {
  postsList: Post[];
  post: Post | null;
}

const initialState: InitialState = {
  postsList: [],
  post: null,
};

const postsReducerSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<InitialState["postsList"]>) => {
      state.postsList = action.payload;
    },
    setPost: (state, action: PayloadAction<InitialState["post"]>) => {
      state.post = action.payload;
    },
  },
});

export const reducers = postsReducerSlice.actions;

export default postsReducerSlice.reducer;
