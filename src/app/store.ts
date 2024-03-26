import { configureStore } from '@reduxjs/toolkit'
// ...

import LanguageState from './utils/slices/LanguageState'

export const store = configureStore({
  reducer: {
    language: LanguageState,
 
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch