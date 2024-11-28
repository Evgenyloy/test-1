import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { searchChanged } from '../../slices/slice';
import { useAppDispatch } from '../../hooks/hooks';
import './search.module.scss';

function Search() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  function search(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    dispatch(searchChanged(e.target.value));
  }
  return (
    <div className="search">
      <form className="search__form">
        <input
          value={value}
          type="text"
          className="search__input"
          placeholder="брус, доска, шпон..."
          onChange={(e) => search(e)}
        />
        <IoMdSearch className="search__icon" />
      </form>
    </div>
  );
}

export default Search;
