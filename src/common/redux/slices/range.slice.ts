import { NumRange } from '@comm-interfaces/numRange';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: NumRange = {
  min: 0,
  max: 100
};


export const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<NumRange>) => {
      return action.payload;
    },
    setRangeMin: (state, action: PayloadAction<number>) => {
      state.min = action.payload;
    },
    setRangeMax: (state, action: PayloadAction<number>) => {
      state.max = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRange, setRangeMin, setRangeMax } = rangeSlice.actions;