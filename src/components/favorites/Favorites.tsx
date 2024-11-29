import RenderItem from '../renderItem/RenderItem';
import { useAppSelector } from '../../hooks/hooks';
import { filteredFavoritesDataSelector } from './favoritesSlice';
import { checkAvailability } from '../../utils/utils';
import { useBtnClick } from '../../hooks/hooks';

function Favorites() {
  const items = useAppSelector(filteredFavoritesDataSelector);
  const dealings = useAppSelector((state) => state.dealings.dealings);
  const { handleBtnClick } = useBtnClick();

  const itemsView = items?.map((item) => {
    let buttonName = !checkAvailability(dealings, item.id)
      ? 'Добавить в сделки'
      : 'Удалить из Сделок';
    const buttonClass = 'col-2__btn';

    return (
      <RenderItem
        item={item}
        key={item.id}
        buttonName={buttonName}
        buttonClass={buttonClass}
        handleBtnClick={() => handleBtnClick(dealings, item.id, item)}
      />
    );
  });
  return <section className="section">{itemsView}</section>;
}

export default Favorites;
