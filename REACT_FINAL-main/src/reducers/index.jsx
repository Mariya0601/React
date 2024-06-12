import {combineReducers} from "@reduxjs/toolkit";
import productReducer from "./ProductSlice.jsx";
import cartReducer from "./CartSlice.jsx";

const rootReducer = combineReducers({
    productSlice: productReducer,
    cartSlice: cartReducer,
})

export default rootReducer;