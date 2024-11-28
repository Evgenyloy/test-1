import { useAppSelector } from '../../hooks/hooks';
import WarehouseItem from '../warehouseItem/WarehouseItem';

import './dealings.module.scss';

function Dealings() {
  const items = useAppSelector((state) => state.slice.dealings);

  const itemsView = items.map((item) => {
    return <WarehouseItem item={item} key={item.id} />;
  });
  return <>{itemsView}</>;
}

export default Dealings;
