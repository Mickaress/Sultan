import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandState } from '../types/types';

const initialState: BrandState = {
  brands: [],
};
const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
  },
});

export const { setBrands } = brandSlice.actions;

export default brandSlice.reducer;
