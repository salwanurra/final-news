import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getIndonesiaNews = createAsyncThunk("news/indonesia", async ()=> {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=7a99daaa984d4c808ea16409ee08dbbf`);
        console.log('getIndonesiaNews', response);
        return response.data;
    } catch (error) {
        throw(error);
    }
});

export const getCovidNews = createAsyncThunk("news/covid", async ()=> {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=covid-19&apiKey=7a99daaa984d4c808ea16409ee08dbbf`);
        console.log('getCovidNews', response);
        return response.data;
    } catch (error) {
        throw(error);
    }
});

export const getFindNews = createAsyncThunk("news/find", async ({search})=> {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=7a99daaa984d4c808ea16409ee08dbbf`);
        console.log('getFindNews', response)
        return response.data;
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
        [getCovidNews.pending]: (state) => {
            state.loading = true;
            state.news = null;
            state.isError = null;
        },
        [getCovidNews.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.news = payload;
            state.isError = null;
        },
        [getCovidNews.rejected]: (state) => {
            state.loading = false;
            state.news = null;
            state.isError = true;
        },
        [getFindNews.pending]: (state) => {
            state.loading = true;
            state.news = null;
            state.isError = null;
        },
        [getFindNews.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.news = payload;
            state.isError = null;
        },
        [getFindNews.rejected]: (state) => {
            state.loading = false;
            state.news = null;
            state.isError = true;
        },
    }
})

export const newsSelector = state => state.news
export default newsSlice.reducer;