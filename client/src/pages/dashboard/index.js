import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
var moment = require('moment');

function Trucks() {
  const [trucks, setTrucks] = useState([]);
  // const classes = useStyles();
  useEffect(() => {
    loadTrucks();
  }, []);

  function loadTrucks() {
    API.getTrucks()
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      {trucks.length ? (
              <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Chassis ID</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Location</th>
                  <th scope="col">Purpose</th>
                  <th scope="col" className="d-none d-sm-table-cell" >Drop Off Date</th>
                  <th scope="col" className="d-none d-sm-table-cell" >Collection Date</th>
                  <th scope="col" className="d-none d-sm-table-cell" >Conact Person</th>
                  <th scope="col" className="d-none d-sm-table-cell" >Conact Email</th>
                  <th scope="col" className="d-none d-sm-table-cell" >Conact Number</th>
                </tr>
              </thead>
              <tbody>
                {trucks.map((truck) => (
                  <tr key={truck._id} className="clickable-row">
                    <td scope="row">
                      {truck.chassisId}
                    </td>
                    <td>{truck.customer}</td>
                    <td>{truck.location}</td>
                    <td>{truck.purpose}</td>
                    <td className="d-none d-sm-table-cell">{moment(truck.dropOffDate).format("DD-MM-YYYY")}</td>
                    <td className="d-none d-sm-table-cell">{moment(truck.collectionDate).format("DD-MM-YYYY")}</td>
                    <td className="d-none d-sm-table-cell">{truck.conactPerson}</td>
                    <td className="d-none d-sm-table-cell">{truck.conactEmail}</td>
                    <td className="d-none d-sm-table-cell">{truck.conactNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table >
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Trucks;
