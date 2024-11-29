import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { IData, RootState } from '../../types/types';
import { filterItems } from '../../utils/utils';

export const filteredDealingsDataSelector = createSelector(
  [
    (state: RootState) => state.dealings.dealings,
    (state: RootState) => state.filter.filter,
    (state: RootState) => state.filter.search,
  ],
  (data, filter, search) => {
    return filterItems(data, filter, search);
  }
);

interface IInitialState {
  dealings: IData[];
}

const initialState: IInitialState = {
  dealings: [],
};

const slice = createSlice({
  name: 'dealings',
  initialState,
  reducers: {
    setDealing: (state, actions: PayloadAction<IData>) => {
      state.dealings.push(actions.payload);
    },
    deleteDealing: (state, action) => {
      state.dealings = state.dealings.filter(
        (item) => item.id !== action.payload
      );
    },
    changeDealing: (state, action) => {
      state.dealings = state.dealings.map((item) => {
        return item.id === action.payload ? { ...item, paid: true } : item;
      });
    },
  },
});

const { actions, reducer } = slice;
export default reducer;
export const { setDealing, deleteDealing, changeDealing } = actions;
