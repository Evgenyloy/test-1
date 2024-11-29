import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Warehouse from '../warehouse/Warehouse';
import Header from '../header/Header';
import FilterAndSearch from '../filterAndSearch/FilterAndSearch';
import MainLayout from '../mainLayout/MainLayout';
import Dealings from '../dealings/Dealings';
import Favorites from '../favorites/Favorites';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchData } from '../warehouse/warehouseSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <FilterAndSearch />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Warehouse />} />
            <Route path="/dealings" element={<Dealings />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
