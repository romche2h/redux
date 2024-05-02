import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAutorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authoFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAutorFilter(e.target.value));
  };

  const handleresetButton = () => {
    dispatch(resetFilters());
  };

  const handleFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={authoFilter}
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleFavoriteFilterChange}
            />
            Only favorite
          </label>
        </div>
        <button type="button" onClick={handleresetButton}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
export default Filter;
