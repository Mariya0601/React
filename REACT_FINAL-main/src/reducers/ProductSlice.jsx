import {createSlice} from "@reduxjs/toolkit";
import catalog from '/src/data/products.js';

const initialState = catalog;

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        filterItems: (state, action) => {
            if (action.payload.length === 0) return initialState;
            return initialState.filter(item => action.payload.indexOf(item.size) in action.payload);
        },
    }
});

export const {
    filterItems} = productSlice.actions;
export default productSlice.reducer;