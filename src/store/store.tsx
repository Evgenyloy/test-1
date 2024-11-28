import { configureStore } from '@reduxjs/toolkit';
import slice from '../slices/slice';

const store = configureStore({
  reducer: {
    slice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
