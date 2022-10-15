import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getIndonesiaNews = createAsyncThunk("news/indonesia", async ()=> {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=7a99daaa984d4c808ea16409ee08dbbf`);
        console.log(response)
        return response;
    } catch (error) {
        throw(error);
    }
})

const initialState = {
    news: null,
    loading: false,
    isError: null,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getIndonesiaNews.pending]: (state) => {
            state.loading = true;
            state.news = null;
            state.isError = null;
        },
        [getIndonesiaNews.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.news = payload;
            state.isError = null;
        },
        [getIndonesiaNews.rejected]: (state) => {
            state.loading = false;
            state.news = null;
            state.isError = true;
        },
    }
})

export const newsSelector = state => state.news
export default newsSlice.reducer;