import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortState } from '../types/types';

const initialState: SortState = {
  value: 'ascName',
};
const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSortValue } = sortSlice.actions;

export default sortSlice.reducer;
