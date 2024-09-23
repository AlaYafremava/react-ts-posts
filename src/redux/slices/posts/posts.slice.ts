import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../api/types";

interface InitialState {
  list: Post[];
  post: Post | null;
}

const initialState: InitialState = {
  list: [],
  post: null,
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
  },
});

export const reducers = postsReducerSlice.actions;

export default postsReducerSlice.reducer;
