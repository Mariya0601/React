import {createSlice} from "@reduxjs/toolkit";
import catalog from "/src/data/products.js";

const totalSum = catalog.reduce((acc, cur) => {
    if (cur.inCart === "true") acc += cur.price;
    return acc;
}, 0)


export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        sum: totalSum,
    },
    reducers: {
        cartSum: (state, action) => {
            state.sum = state.sum + action.payload;
            return state;
        },
    }
});

export const {
    cartSum} = cartSlice.actions;
export default cartSlice.reducer;
