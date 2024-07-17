import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./Slices/UserAuth";

export const store = configureStore({
    reducer:{
        auth: UserAuth
    },
    devTools:true
});