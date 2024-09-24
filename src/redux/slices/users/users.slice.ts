import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../api/types";

interface InitialState {
  list: User[];
  user: User | null;
  getUsersIsProcessing: boolean;
}

const initialState: InitialState = {
  list: [],
  user: null,
  getUsersIsProcessing: false,
};

const usersReducerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<InitialState["list"]>) => {
      state.list = action.payload;
    },
    setUser: (state, action: PayloadAction<InitialState["user"]>) => {
      state.user = action.payload;
    },
    setGetUsersIsProcessing: (state, action: PayloadAction<InitialState['getUsersIsProcessing']>) => {
      state.getUsersIsProcessing = action.payload;
    },
  },
});

export const reducers = usersReducerSlice.actions;

export default usersReducerSlice.reducer;
