import React from 'react';
import RenderItem from '../renderItem/RenderItem.tsx';
import { useAppSelector } from '../../hooks/hooks.tsx';
import { checkAvailability } from '../../utils/utils.tsx';
import { filteredWarehouseSelector } from './warehouseSlice.tsx';
import { useFavoriteClick, useBtnClick } from '../../hooks/hooks.tsx';
import { IData } from '../../types/types.tsx';

function Warehouse() {
  const items = useAppSelector(filteredWarehouseSelector);
  const dealing = useAppSelector((state) => state.dealings.dealings);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const { handleFavoriteClick } = useFavoriteClick();
  const { handleBtnClick } = useBtnClick();

  const itemsView = items?.map((item: IData) => {
    let buttonName;
    !checkAvailability(dealing, item.id)
      ? (buttonName = 'Добавить в сделки')
      : (buttonName = 'Удалить из Сделок');
    const buttonClass = 'col-2__btn';

    return (
      <React.Fragment key={item.id}>
        <RenderItem
          item={item}
          handleBtnClick={() => handleBtnClick(dealing, item.id, item)}
          handleFavoriteClick={() =>
            handleFavoriteClick(favorites, item.id, item)
          }
          buttonName={buttonName}
          buttonClass={buttonClass}
        />
      </React.Fragment>
    );
  });

  return <section className="section">{itemsView}</section>;
}

export default Warehouse;
