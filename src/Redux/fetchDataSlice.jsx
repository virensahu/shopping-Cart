import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
});

const fetchDataSlice = createSlice({
    name: 'fetchData',
    initialState: {
        items: [],
        loader: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loader = false;
            state.items = action.payload;
        });

        builder.addCase(fetchData.rejected, (state) => {
            state.error = "Network Error";
        });
    }
});

export default fetchDataSlice.reducer;

 