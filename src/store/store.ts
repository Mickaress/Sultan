import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productReducer from './productsSlice';
import sortReducer from './sortSlice';
import cartReducer from './cartSlice';
import brandReducer from './brandSlice';
import priceSlice from './priceSlice';
import careSlice from './careSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    sort: sortReducer,
    cart: cartReducer,
    brands: brandReducer,
    price: priceSlice,
    care: careSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
