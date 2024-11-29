import { FC } from 'react';
import { IData } from '../../types/types.tsx';
import img from '../../image/Image.jpeg';
import { MdFavoriteBorder } from 'react-icons/md';
import { useAppSelector } from '../../hooks/hooks';
import { useFavoriteClick } from '../../hooks/hooks';
import './index.scss';

interface IWarehouseItemProps {
  item: IData;
  handleBtnClick?: () => void;
  handleFavoriteClick?: () => void;
  buttonName?: string;
  buttonClass?: string;
}

const RenderItem: FC<IWarehouseItemProps> = ({
  item,
  handleBtnClick,
  buttonName,
  buttonClass,
}) => {
  const { offer, name, city, seller, price, quantity, description, id } = item;

  const { handleFavoriteClick } = useFavoriteClick();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const className = favorites.some((item) => item.id === id)
    ? 'col-2__icons col-2__icons--checked'
    : 'col-2__icons';

  return (
    <div className="render-item">
      <div className="container">
        <div className="render-item__inner">
          <div className="render-item__col-1 col-1">
            <div className="col-1__inner">
              <div className="col-1__img-cont">
                <img src={img} alt="woods" className="col-1__img" />
              </div>
              <div className="col-1__info info">
                <p className="info__type">{offer}</p>
                <p className="info__name">{name}</p>
                <p className="info__place">{city}</p>
                <p className="info__seller">
                  <span>Продавец </span>
                  {seller}
                </p>
                <div className="info__inner">
                  <p className="info__kind">
                    <span>Вид товара </span>
                    <br />
                    Стройматериалы
                  </p>
                </div>
                <div className="info__desc">{description}</div>
              </div>
            </div>
          </div>
          <div className="render-item__col-2 col-2">
            <div className="col-2__inner">
              <p className="col-2__price">{price * quantity + ' ₽'}</p>
              <div className="col-2__qty-inner">
                <p className="col-2__qty-text">Количество</p>
                <p className="col-2__qty">{quantity + ' шт'}</p>
              </div>
              <div className="col-2__qty-inner">
                <p className="col-2__qty-text">Стоимость за штуку</p>
                <p className="col-2__qty">{price + ' ₽'}</p>
              </div>
            </div>
            <div className="col-2__btns-inner">
              <p
                className={buttonClass}
                id={id.toString()}
                onClick={handleBtnClick}
              >
                {buttonName}
              </p>
              <MdFavoriteBorder
                className={className}
                onClick={() => handleFavoriteClick(favorites, item.id, item)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderItem;
