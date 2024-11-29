import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import RenderItem from '../renderItem/RenderItem';
import {
  filteredDealingsDataSelector,
  changeDealing,
} from './dealingsSlice.tsx';
import { IData } from '../../types/types.tsx';

function Dealings() {
  const items = useAppSelector(filteredDealingsDataSelector);
  const dealing = useAppSelector((state) => state.dealings.dealings);
  const dispatch = useAppDispatch();
  const handleBtnClick = (id: number) => {
    dispatch(changeDealing(+id));
  };

  const itemsView = items?.map((item) => {
    const buttonName = item.paid === true ? 'Оплачено' : 'Оплатить';
    const buttonClassName =
      item.paid === true
        ? 'col-2__btn col-2__btn--disable'
        : 'col-2__btn col-2__btn--active';

    return (
      <RenderItem
        item={item}
        key={item.id}
        buttonName={buttonName}
        handleBtnClick={() => handleBtnClick(item.id)}
        buttonClass={buttonClassName}
      />
    );
  });
  return <section className="section">{itemsView}</section>;
}

export default Dealings;
