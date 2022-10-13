import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const news = createAsyncThunk("news", async ()=> {
    try {
        // const response = await login(username, password);
        // return response;
    } catch (error) {
        throw(error);
    }
})

const initialState = {
    data: null,
    loading: false,
    isError: null,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
    },
    extraReducers: {
        [news.pending]: (state) => {
            state.loading = true;
            state.user = null;
            state.isError = null;
        },
        [news.fulfilled]: (state, action) => {
            //   console.log(state,'state')
            //   console.log(action,'action')
            const {password} = action.payload;
            state.loading = false;
            state.user = {password};
            state.isError = null;
        },
        [news.rejected]: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isError = action.error.message;
        },
    }
})

export default newsSlice.reducer;