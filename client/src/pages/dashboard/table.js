import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

const columns = [
  { field: "chassisId", headerName: "Chassis ID", width: 70 },
  { field: "customer", headerName: "Customer", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "purpose", headerName: "Purpose", width: 90 },
  { field: "dropOffDate", headerName: "Drop Off Date", width: 70 },
  { field: "collectionDate", headerName: "Collection Date", width: 130 },
  { field: "conactPerson", headerName: "Conact Person", width: 130 },
  { field: "conactEmail", headerName: "Conact Email", width: 90 },
  { field: "conactNumber", headerName: "Conact Number", width: 90 },
];

const rows = [
  {
    chassisId: 1,
    customer: "Snow",
    location: "Jon",
    purpose: 35,
    dropOffDate: "Snow",
    collectionDate: "Jon",
    conactPerson: 35,
    conactEmail: 35,
    conactNumber: 35,
  },
  {
    chassisId: 1,
    customer: "Lannister",
    location: "Cersei",
    purpose: 35,
    dropOffDate: "Snow",
    collectionDate: "Jon",
    conactPerson: 35,
    conactEmail: 35,
    conactNumber: 35,
  },
];

return (
  <div>
    <form className="form">
    <label>
      Is going:
      <input
        name="isGoing"
        type="checkbox"
        checked={this.state.isGoing}
        onChange={this.handleInputChange} />
    </label>
    <br />
    <label>
      Number of guests:
      <input
        name="numberOfGuests"
        type="number"
        value={this.state.numberOfGuests}
        onChange={this.handleInputChange} />
    </label>
    </form>
  </div>
);
