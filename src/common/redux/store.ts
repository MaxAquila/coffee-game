import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rangeSlice } from '@comm-redux/slices/range.slice';
import { playersSlice } from './slices/players.slice';


const rootReducer = combineReducers({
  players: playersSlice.reducer,
  range: rangeSlice.reducer
});
/**Type/interface of the {@link rootReducer}. */
export type IRootState = ReturnType<typeof rootReducer>;


export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});