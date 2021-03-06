import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todos-slice';

const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});

export default store;
