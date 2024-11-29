import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../types/types';
import { checkAvailability } from '../utils/utils';
import {
  deleteDealing,
  setDealing,
} from '../components/dealings/dealingsSlice';
import {
  deleteFavorite,
  setFavorite,
} from '../components/favorites/favoritesSlice';
import { IData } from '../types/types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useFavoriteClick = () => {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = (dealing: IData[], id: number, item: IData) => {
    if (checkAvailability(dealing, id)) {
      dispatch(deleteFavorite(item.id));
    } else {
      dispatch(setFavorite(item));
    }
  };
  return { handleFavoriteClick };
};

export const useBtnClick = () => {
  const dispatch = useAppDispatch();

  const handleBtnClick = (dealing: IData[], id: number, item: IData) => {
    if (checkAvailability(dealing, id)) {
      dispatch(deleteDealing(item.id));
    } else {
      const newItem = { ...item, paid: false };
      dispatch(setDealing(newItem));
    }
  };
  return { handleBtnClick };
};
