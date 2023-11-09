import { useEffect } from 'react';
// import Loading from '../Loading';
import { useAppContext } from '../context/appContext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.min.css';
import Wrapper from '../assets/wrappers/DataTable';

const DataGov = () => {
  const { getPastRecords, hdb_records } = useAppContext();

  useEffect(() => {
    getPastRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*Disabled Loading because it will reset ui to top of page which is pretty annoying  */
  // if (isLoading) {
  //   return <Loading center />;
  // }

  return (
    <Wrapper>
      <DataTable
        value={hdb_records}
        paginator
        rows={20}
        rowsPerPageOptions={[20, 50, 100]}
        showGridlines
        stripedRows
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column
          field="month"
          header="Month"
          sortable
          style={{ width: '25%' }}
        />
        <Column field="town" header="Town" sortable style={{ width: '25%' }} />
        <Column
          field="block"
          header="Block"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="street_name"
          header="Street"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="flat_type"
          header="Flat Type"
          sortable
          style={{ width: '25%' }}
        />
        {/* <Column field="flat_model" header="Flat Model" sortable style={{ width: '25%' }}/> */}
        <Column
          field="storey_range"
          header="Storey"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="floor_area_sqm"
          header="Floor Area(sqm)"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="lease_commence_date"
          header="Lease Start Date"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="remaining_lease"
          header="Remaining Lease"
          sortable
          style={{ width: '25%' }}
        />
        <Column
          field="resale_price"
          header="Price"
          sortable
          style={{ width: '25%' }}
        />
      </DataTable>
    </Wrapper>
  );
};

export default DataGov;


