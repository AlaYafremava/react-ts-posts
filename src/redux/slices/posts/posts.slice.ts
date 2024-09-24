import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../api/types";

interface InitialState {
  list: Post[];
  post: Post | null;
  getPostsIsProcessing: boolean;
}

const initialState: InitialState = {
  list: [],
  post: null,
  getPostsIsProcessing: false,
};

const postsReducerSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<InitialState["list"]>) => {
      state.list = action.payload;
    },
    setPost: (state, action: PayloadAction<InitialState["post"]>) => {
      state.post = action.payload;
    },
    setGetPostsIsProcessing: (
      state,
      action: PayloadAction<InitialState["getPostsIsProcessing"]>
    ) => {
      state.getPostsIsProcessing = action.payload;
    },
  },
});

export const reducers = postsReducerSlice.actions;

export default postsReducerSlice.reducer;
