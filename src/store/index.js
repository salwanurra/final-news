import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './news/NewsSlice'
import SaveSlice from './saved/SaveSlice'
export const store = configureStore({
  reducer: {
    news: newsReducer,
    saved: SaveSlice,
  },
})