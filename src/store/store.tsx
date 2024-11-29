import { configureStore } from '@reduxjs/toolkit';
import favorites from '../components/favorites/favoritesSlice';
import dealings from '../components/dealings/dealingsSlice';
import warehouse from '../components/warehouse/warehouseSlice';
import filter from '../components/filterAndSearch/filtersSlice';

const store = configureStore({
  reducer: {
    favorites,
    dealings,
    warehouse,
    filter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
