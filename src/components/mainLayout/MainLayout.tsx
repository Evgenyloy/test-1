import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Spinner from '../spinner/Spinner';
import { Error } from '../errorFilter/Errors';

const MainLayout = () => {
  const { dataLoadingStatus, data } = useAppSelector(
    (state) => state.warehouse
  );

  return (
    <>
      {dataLoadingStatus === 'loading' && <Spinner />}
      {dataLoadingStatus === 'error' && (
        <Error text={'Ошибка загрузки данных'} />
      )}
      {data && <Outlet />}
    </>
  );
};

export default MainLayout;
