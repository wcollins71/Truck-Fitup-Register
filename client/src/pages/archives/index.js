import React, { useState, useEffect } from "react";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';
import "./style.css";
var moment = require("moment");

function Trucks() {
  const [trucks, setTrucks] = useState([]);
  const history = useHistory();
  // const classes = useStyles();
  useEffect(() => {
    loadTrucks();
  }, []);

  function loadTrucks() {
    API.getArchives()
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  }

  function getDateValue(value) {
    if (value === undefined || value === null || value === "") {
      return "";
    }
    return moment(value).format("DD-MM-YYYY");
  }

  function onTruckRowClicked(truck) {
    history.push("/truck/" + truck._id)
  }

  return (
    <div className="container">
      {trucks.length ? (
        <div>
          <table className="table table-striped table-dark hover">
            <thead>
              <tr>
                <th scope="col">Chassis ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Location</th>
                <th scope="col">Purpose</th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Drop Off Date
                </th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Collection Date
                </th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Conact Person
                </th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Contact Email
                </th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              {trucks.map((truck) => (
                <tr key={truck._id} onClick={() => onTruckRowClicked(truck)}>
                  <td>{truck.chassisId}</td>
                  <td>{truck.customer}</td>
                  <td>{truck.location}</td>
                  <td>{truck.purpose}</td>
                  <td className="d-none d-sm-table-cell">
                    {getDateValue(truck.dropOffDate)}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {getDateValue(truck.collectionDate)}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {truck.conactPerson}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {truck.conactEmail}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {truck.conactNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Trucks;
