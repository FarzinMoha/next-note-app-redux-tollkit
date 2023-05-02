import { configureStore } from "@reduxjs/toolkit";
import textListReducer from './features/textListSlice'
import categoryReducer from './features/categorySlice'

const store = configureStore({
    reducer:{
        text:textListReducer,
        category:categoryReducer
    }
})

export default store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch