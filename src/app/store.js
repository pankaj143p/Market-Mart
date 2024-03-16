// import { configureStore } from '@reduxjs/toolkit';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from '../features/Product_List/ProductListSlice';
import authReducer from '../features/Authentication/AuthSlice';
import cartReducer from '../features/Cart/CartSlice';
import orderReducer from '../features/Orders/OrdersSlice';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
