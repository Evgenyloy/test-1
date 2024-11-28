import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue?: string;
  extra?: { s: string; n: number };
}>();
