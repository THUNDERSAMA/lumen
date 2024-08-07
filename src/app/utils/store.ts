import { combineReducers, configureStore } from "@reduxjs/toolkit";
// ...

import LanguageState from "./slices/LanguageState";
import UserState from "./slices/UserState";
import UploaddataState from "./slices/UploaddataState";

const rootReducer = combineReducers({
  language: LanguageState,
  user: UserState,
  Uploaddata:UploaddataState,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
