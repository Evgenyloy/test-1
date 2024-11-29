import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Spinner from '../spinner/Spinner';
import { Error } from '../errorFilter/Errors';

const MainLayout = () => {
  const { dataLoadingStatus, data } = useAppSelector(
    (state) => state.warehouse
  );
  console.log(dataLoadingStatus);

  return (
    <>
      {dataLoadingStatus === 'loading' && <Spinner />}
      {dataLoadingStatus === 'error' && (
        <Error text={'ошибка загрузки данных'} />
      )}
      {data && <Outlet />}
    </>
  );
};

export default MainLayout;
