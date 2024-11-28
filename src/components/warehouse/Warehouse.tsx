import React, { useEffect } from 'react';
import WarehouseItem from '../warehouseItem/WarehouseItem';
import { useAppSelector } from '../../hooks/hooks.tsx';
import { fetchData } from '../../slices/slice.tsx';
import { useAppDispatch } from '../../hooks/hooks.tsx';
import './warehouse.module.scss';

function filterData(data: IRequestData[], filter: string) {
  if (filter === 'Все типы') return data;

  return data.filter((item) => item.offer === filter);
}

function searchItem(data: IRequestData[], searchString: string) {
  if (searchString === '') return data;
  return data.filter((item) =>
    item.name.toLowerCase().startsWith(searchString.toLowerCase())
  );
}

export interface IRequestData {
  city: string;
  description: string;
  id: number;
  name: string;
  offer: string;
  price: number;
  quantity: number;
  seller: string;
}

function Warehouse() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { search, data, filter } = useAppSelector((state) => state.slice);

  const datav = searchItem(filterData(data, filter), search);

  const items = datav.map((item: IRequestData) => {
    return (
      <React.Fragment key={item.id}>
        <WarehouseItem item={item} />;
      </React.Fragment>
    );
  });

  return <div>{items}</div>;
}

export default Warehouse;
