import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, CartState } from '../types/types';

const initialState: CartState = {
  items: [],
  count: 0,
  price: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.count = action.payload.count;
      state.price = action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      state.price = 0;
      localStorage.removeItem('cart');
    },
    addCount: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({
          id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1,
          product: action.payload,
          count: 1,
        });
      }
      state.count += 1;
      state.price += action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    lessCount: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.id);
      if (existingItem) {
        if (existingItem.count === 1) {
          state.items = state.items.filter((item) => item.product.id !== action.payload.id);
        } else {
          existingItem.count -= 1;
        }
      }
      state.count -= 1;
      state.price -= action.payload.price;
      if (state.count !== 0) {
        localStorage.setItem('cart', JSON.stringify(state));
      } else {
        localStorage.removeItem('cart');
      }
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      const item = state.items.find((item) => item.product.id === action.payload.id);
      if (item) {
        state.count -= item.count;
        state.price -= item.count * item.product.price;
      }
      state.items = state.items.filter((item) => item.product.id !== action.payload.id);
      if (state.count !== 0) {
        localStorage.setItem('cart', JSON.stringify(state));
      } else {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { setCart, addCount, lessCount, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
