import { createSlice } from "@reduxjs/toolkit";

const cartProductsSlice = createSlice({
  name: "Products in cart",
  initialState: [],
  reducers: {
    addAllProductsToCart: (state, { payload }) => {
      state = payload;
      return state;
    },
    addToCart: (state, { payload }) => {
      state.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      for (let i = 0; i < state.length; i++) {
        const product = state[i];
        if (product.id == payload) {
          state.splice(i, 1);
          break;
        }
      }
    },
    incrementQuantity: (state, { payload }) => {
      const index = state.findIndex((product) => product.id == payload);
      state[index].quantity++;
    },
    decrementQuantity: (state, { payload }) => {
      const index = state.findIndex((product) => product.id == payload);
      state[index].quantity -= 1;
    },
  },
});

export default cartProductsSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  addAllProductsToCart,
  incrementQuantity,
  decrementQuantity,
} = cartProductsSlice.actions;
