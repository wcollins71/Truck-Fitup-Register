import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";





function Trucks() {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    }
  });
  const [trucks, setTrucks] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    loadTrucks();
  }, []);

  function loadTrucks() {
    API.getTrucks()
      .then((res) => setTrucks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {trucks.length ? (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Chassis ID</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Purpose</TableCell>
                  <TableCell align="right">Drop Off Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trucks.map((truck) => (
                  <TableRow key={truck._id}>
                    <TableCell component="th" scope="row">
                      {truck.chassisId}
                    </TableCell>
                    <TableCell align="right">{truck.customer}</TableCell>
                    <TableCell align="right">{truck.location}</TableCell>
                    <TableCell align="right">{truck.purpose}</TableCell>
                    <TableCell align="right">{truck.dropOffDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <List>
            {trucks.map((truck) => (
              <ListItem key={truck._id}>
                <strong>
                  {truck.chassisId} by {truck.customer}
                </strong>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Trucks;
