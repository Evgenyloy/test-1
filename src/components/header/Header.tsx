import Stock from '../../image/stock_20.svg?react';
import Group from '../../image/Group_2086.svg?react';
import Favorite from '../../image/favourite_20.svg?react';
import { Link, useLocation } from 'react-router-dom';
import './header.module.scss';

function Header() {
  const { pathname } = useLocation();

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
              <Link className="header__text" to="#">
                Избранное
              </Link>
            </div>
            <div
              className={
                pathname === '/'
                  ? 'header__item header__item--checked'
                  : 'header__item'
              }
            >
              <Group className="header__icon" />
              <Link className="header__text" to="/">
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
              <Link className="header__text" to="/dealings">
                Сделки
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
