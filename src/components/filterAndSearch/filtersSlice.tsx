import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  filter: string;
  search: string;
}

const initialState: IInitialState = {
  filter: 'Все типы',
  search: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChanged: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    searchChanged: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export default reducer;
export const { filterChanged, searchChanged } = actions;
