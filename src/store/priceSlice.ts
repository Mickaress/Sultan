import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceState } from '../types/types';

const initialState: PriceState = {
  min: 0,
  max: 0,
};
const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setMin: (state, action: PayloadAction<number>) => {
      state.min = action.payload;
    },
    setMax: (state, action: PayloadAction<number>) => {
      state.max = action.payload;
    },
  },
});

export const { setMin, setMax } = priceSlice.actions;

export default priceSlice.reducer;
