import Stock from '../../image/stock_20.svg?react';
import Group from '../../image/Group_2086.svg?react';
import Favorite from '../../image/favourite_20.svg?react';
import { Link, useLocation } from 'react-router-dom';
import { filterChanged } from '../filterAndSearch/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './header.module.scss';

function Header() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.filter);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dealings = useAppSelector((state) => state.dealings.dealings);
  const handleClick = () => {
    if (filter === 'Все типы') return;
    dispatch(filterChanged('Все типы'));
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="header__nav">
            <div
              className={
                pathname === '/favorites'
                  ? 'header__item header__item--checked'
                  : 'header__item'
              }
            >
              <Favorite className="header__icon icon-1" />
              <Link
                className="header__text"
                to="favorites"
                onClick={handleClick}
              >
                Избранное
              </Link>
              <span className="header__item-counter">
                {favorites.length > 0 ? favorites.length : null}
              </span>
            </div>
            <div
              className={
                pathname === '/'
                  ? 'header__item header__item--checked'
                  : 'header__item'
              }
            >
              <Group className="header__icon" />
              <Link className="header__text" to="/" onClick={handleClick}>
                Склад
              </Link>
            </div>
            <div
              className={
                pathname === '/dealings'
                  ? 'header__item header__item--checked'
                  : 'header__item'
              }
            >
              <Stock className="header__icon" />
              <Link
                className="header__text"
                to="/dealings"
                onClick={handleClick}
              >
                Сделки
              </Link>
              <span className="header__item-counter">
                {dealings.length > 0 ? dealings.length : null}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
