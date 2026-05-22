import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  orders: [],

  loading: false,

  error: null,
};



const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    orderStart: (state) => {
      state.loading = true;
    },

    orderSuccess: (
      state,
      action
    ) => {
      state.loading = false;

      state.orders =
        action.payload;
    },

    orderFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
  },
});



export const {
  orderStart,
  orderSuccess,
  orderFail,
} = orderSlice.actions;



export default orderSlice.reducer;