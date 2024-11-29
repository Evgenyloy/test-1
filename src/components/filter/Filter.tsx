import { filterChanged } from '../filterAndSearch/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './filter.module.scss';

function Filter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.filter);

  const handleClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if ((e.target as HTMLElement).id === filter) return;
    if (e.target instanceof HTMLElement) {
      dispatch(filterChanged(e.target.id));
    }
  };

  return (
    <div className="filter">
      <div className="filter__inner">
        <p
          className={
            filter === 'Все типы' ? 'filter__item checked' : 'filter__item'
          }
          id="Все типы"
          onClick={handleClick}
        >
          Все типы
        </p>
        <p
          className={
            filter === 'Прямые продажи'
              ? 'filter__item checked'
              : 'filter__item'
          }
          id="Прямые продажи"
          onClick={handleClick}
        >
          Прямые продажи
        </p>
        <p
          className={
            filter === 'Аукцион' ? 'filter__item checked' : 'filter__item'
          }
          id="Аукцион"
          onClick={handleClick}
        >
          Аукцион
        </p>
      </div>
    </div>
  );
}

export default Filter;
