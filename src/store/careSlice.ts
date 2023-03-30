import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CareState } from '../types/types';

const initialState: CareState = {
  care: '',
};
const careSlice = createSlice({
  name: 'care',
  initialState,
  reducers: {
    setCare: (state, action: PayloadAction<string>) => {
      state.care = action.payload;
    },
  },
});

export const { setCare } = careSlice.actions;

export default careSlice.reducer;
