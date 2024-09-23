import { combineReducers, configureStore, Action } from '@reduxjs/toolkit';
import { postsReducer } from './slices';

const RESET_STORE = 'RESET_STORE';

export const resetStore = () => ({ type: RESET_STORE });

const rootReducer = combineReducers({
  posts: postsReducer,
  // TODO: Users
  // users: usersReducer,
});

const rootReducerWithReset = (state: RootState | undefined, action: Action<string>) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducerWithReset,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
