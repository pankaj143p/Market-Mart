import { configureStore } from '@reduxjs/toolkit';
import userSlices from './features/userSlices';
import ProductListSlice from './features/Products/ProductListSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlices,
      products:ProductListSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];