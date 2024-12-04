import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import  authReducer  from './features/authSlice/authSlice';
import audioReducer from './features/AudioSlice'

 const store = configureStore({
    reducer:{
        auth: authReducer,
        audio: audioReducer,
    },
});

setupListeners(store.dispatch)

export default store;