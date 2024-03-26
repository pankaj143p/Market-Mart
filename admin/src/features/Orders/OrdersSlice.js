import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './ordersAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      });
  },
});

// export const { increment } = counterSlice.actions;
export const { resetOrder } = orderSlice.actions;
// export const selectCount = (state) => state.counter.value;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export default orderSlice.reducer;