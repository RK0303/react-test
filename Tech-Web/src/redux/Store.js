import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/products/ProductSlice"
import cartReducer from "../redux/cart/cartSlice"

export const Store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
})