import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { IRequestData } from '../components/warehouse/Warehouse';
import { createAppAsyncThunk } from '../hooks/hooks';

export const request = async (
  url: string,
  method = 'GET',
  headers = { 'Content-Type': 'application/json' }
) => {
  try {
    const response = await fetch(url, { method, headers });
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }
    const data = await response.json();

    return data.data;
  } catch (e) {
    throw e;
  }
};

const json1 =
  'https://github.com/evgenyloy/repo-main-db.json/blob/[main|master]/db.json';

const json2 = 'https://dummyjson.com/c/ad42-e123-4545-a0e5';

export const fetchData = createAppAsyncThunk<IRequestData[]>(
  'data/fetchData',
  () => {
    return request(
      'https://api.jsonsilo.com/public/de99263a-e84a-4527-bb6d-148387d3d835'
    );
  }
);

interface IInitialState {
  filter: string;
  search: string;
  dealings: IRequestData[];
  favorites: IRequestData[];
  data: IRequestData[];
  dataLoadingStatus: string;
}

const initialState: IInitialState = {
  filter: 'Все типы',
  search: '',
  dealings: [],
  favorites: [],
  data: [],
  dataLoadingStatus: 'idle',
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    filterChanged: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    searchChanged: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setDealing: (state, actions: PayloadAction<IRequestData>) => {
      state.dealings.push(actions.payload);
    },
    deleteDealing: (state, action) => {
      state.dealings = state.dealings.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {});
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.dataLoadingStatus = 'error';
    });
  },
});

const { actions, reducer } = slice;
export default reducer;
export const { filterChanged, searchChanged, setDealing, deleteDealing } =
  actions;
