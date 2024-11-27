import './header.module.scss';
import favorite from '../../image/favourite_20.svg';
import stock from '../../image/stock_20.svg';
import group from '../../image/Group 2086.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="header__nav">
            <a className="header__item" href="#">
              <img src={favorite} alt="icon" className="header__icon" />
              <p className="header__text">Избранное</p>
            </a>
            <a className="header__item" href="#">
              <img src={stock} alt="icon" className="header__icon" />
              <p className="header__text">Склад</p>
            </a>
            <a className="header__item" href="#">
              <img src={group} alt="icon" className="header__icon" />
              <p className="header__text">Сделки</p>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
