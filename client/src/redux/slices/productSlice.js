import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  products: [],

  loading: false,

  error: null,
};



const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
    },

    fetchProductsSuccess: (
      state,
      action
    ) => {
      state.loading = false;

      state.products =
        action.payload;
    },

    fetchProductsFail: (
      state,
      action
    ) => {
      state.loading = false;

      state.error = action.payload;
    },
  },
});



export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFail,
} = productSlice.actions;



export default productSlice.reducer;