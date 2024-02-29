import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product_List/ProductListSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
