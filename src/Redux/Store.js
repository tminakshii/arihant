import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice"
import authReducer from "./AuthSlice"

const myStore=configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer,
    }
})
export default myStore