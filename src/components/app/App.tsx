import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Warehouse from '../warehouse/Warehouse';
import Header from '../header/Header';
import FilterAndSearch from '../filterAndSearch/FilterAndSearch';
import MainLayout from '../mainLayout/MainLayout';
import Dealings from '../dealings/Dealings';
import '../../style/style.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <FilterAndSearch />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Warehouse />} />
            <Route path="/dealings" element={<Dealings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
