import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { IData } from '../../types/types';
import { RootState } from '../../types/types';
import { filterItems } from '../../utils/utils';

export const filteredFavoritesDataSelector = createSelector(
  [
    (state: RootState) => state.favorites.favorites,
    (state: RootState) => state.filter.filter,
    (state: RootState) => state.filter.search,
  ],
  (data, filter, search) => {
    return filterItems(data, filter, search);
  }
);

interface IInitialState {
  favorites: IData[];
}

const initialState: IInitialState = {
  favorites: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite: (state, actions: PayloadAction<IData>) => {
      state.favorites.push(actions.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const { actions, reducer } = slice;
export default reducer;
export const { setFavorite, deleteFavorite } = actions;
