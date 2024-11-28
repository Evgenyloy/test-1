import { FC } from 'react';
import { IRequestData } from '../warehouse/Warehouse';
import img from '../../image/Image.jpeg';
import { useAppDispatch } from '../../hooks/hooks';
import { setDealing } from '../../slices/slice';
import { MdFavoriteBorder } from 'react-icons/md';

import './warehouseItem.scss';

interface IWarehouseItemProps {
  item: IRequestData;
}

const WarehouseItem: FC<IWarehouseItemProps> = ({ item }) => {
  const { offer, name, city, seller, price, quantity, description } = item;

  const dispatch = useAppDispatch();

  return (
    <div className="warehouse-item">
      <div className="container">
        <div className="warehouse-item__inner">
          <div className="warehouse-item__col-1 col-1">
            <div className="col-1__inner">
              <img src={img} alt="woods" className="col-1__img" />
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
          <div className="warehouse-item__col-2 col-2">
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
              <div className="col-2__btns-inner">
                <p
                  className="col-2__btn"
                  onClick={() => dispatch(setDealing(item))}
                >
                  Добавить в сделки
                </p>
                <MdFavoriteBorder className="col-2__icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseItem;
