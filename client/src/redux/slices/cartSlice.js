import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cartItems: [],

  loading: false,

  error: null,
};



const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    cartStart: (state) => {
      state.loading = true;
    },

    cartSuccess: (
      state,
      action
    ) => {
      state.loading = false;

      state.cartItems =
        action.payload;
    },

    cartFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});



export const {
  cartStart,
  cartSuccess,
  cartFail,
  clearCart,
} = cartSlice.actions;



export default cartSlice.reducer;