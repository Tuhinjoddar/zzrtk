

import { configureStore } from "@reduxjs/toolkit";
// You define name.
import userReducer from "./slice";
import todoReducer from "./todoSlice"
export const store = configureStore({

    reducer: {
        username: userReducer,
        todoname: todoReducer,
    }
})
