import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Product } from '../types/types';

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
      if (state.products.length !== 0) {
        localStorage.setItem('products', JSON.stringify(state.products));
      } else {
        localStorage.removeItem('products');
      }
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
      state.products[productIndex] = { ...state.products[productIndex], ...action.payload };
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { setProducts, deleteProduct, addProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
