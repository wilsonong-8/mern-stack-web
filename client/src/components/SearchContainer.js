import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    handleChange,
    search,
    search_area,
    search_unitType,
    search_minPrice,
    search_maxPrice,
    areaOptions,
    unitTypeOptions,
    getAdverts,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    getAdverts();
  };

  const handleSearchInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search </h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearchInput}
          />

          <FormRowSelect
            labelText="location"
            name="search_area"
            value={search_area}
            handleChange={handleSearchInput}
            list={['', ...areaOptions]}
          />

          <FormRowSelect
            labelText="unit type"
            name="search_unitType"
            value={search_unitType}
            handleChange={handleSearchInput}
            list={['', ...unitTypeOptions]}
          />
          <FormRow
            labelText="minimum price"
            type="text"
            name="search_minPrice"
            value={search_minPrice}
            handleChange={handleSearchInput}
            style={{ width: '20px' }}
          />
          <FormRow
            labelText="maximum price"
            type="text"
            name="search_maxPrice"
            value={search_maxPrice}
            handleChange={handleSearchInput}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              search
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
