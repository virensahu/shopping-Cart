import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Redux/cartSlice';
import fetchDataReducer from './Redux/fetchDataSlice';

export const store = configureStore({
    reducer: {
        fetchData: fetchDataReducer,
        cart: cartReducer,
    }
});

