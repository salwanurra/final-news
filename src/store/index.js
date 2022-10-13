import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './news/NewsSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
})