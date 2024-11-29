import store from '../store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue?: string;
  extra?: { s: string; n: number };
}>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface IData {
  city: string;
  description: string;
  id: number;
  name: string;
  offer: string;
  price: number;
  quantity: number;
  seller: string;
  paid?: boolean;
}
