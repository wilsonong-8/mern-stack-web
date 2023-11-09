import { FormRow, FormRowSelect, DataGov } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const PastTransaction = () => {
  const {
    hdb_town,
    hdb_block,
    hdb_street,
    hdb_flatType,
    hdb_flatTypeOptions,
    handleChange,
    clearSearchFormValues,
    getPastRecords,
    isLoading,
  } = useAppContext();

  const isAdmin = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    getPastRecords();
  };

  const handleSearchInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div>
      <Wrapper isAdmin={isAdmin}>
        <form className="form">
          <h3>HDB Past Transactions</h3>
        </form>
        <div className="form-center">
          {/*Search Query*/}
          <FormRow
            labelText="town"
            type="text"
            name="hdb_town"
            value={hdb_town}
            handleChange={handleSearchInput}
          />
          {/*Block Number */}
          <FormRow
            labelText="block"
            type="text"
            name="hdb_block"
            value={hdb_block}
            handleChange={handleSearchInput}
          />
          {/*Street Name */}
          <FormRow
            labelText="street"
            type="text"
            name="hdb_street"
            value={hdb_street}
            handleChange={handleSearchInput}
          />
          {/*Flat Type */}
          <FormRowSelect
            labelText="unit type"
            name="hdb_flatType"
            value={hdb_flatType}
            handleChange={handleSearchInput}
            list={hdb_flatTypeOptions}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>

            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearSearchFormValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </Wrapper>

      {/* <p></p>
      <iframe
        width="1000"
        height="400"
        src="https://data.gov.sg/dataset/resale-flat-prices/resource/f1765b54-a209-4718-8d38-a39237f502b3/view/093ff0f0-783f-4f6a-be52-7e506a8c58ca"
        frameBorder="0"
      >
      </iframe> */}

      <p></p>
      <DataGov />
    </div>
  );
};
export default PastTransaction;
