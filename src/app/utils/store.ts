import { combineReducers, configureStore } from "@reduxjs/toolkit";
// ...

import LanguageState from "./slices/LanguageState";
import ColorState from "./slices/ColorState";

const rootReducer = combineReducers({
  language: LanguageState,
  color: ColorState,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
