import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice';
import filterReducer from '../features/filter/filter';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    filter:filterReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
});
