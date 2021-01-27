import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

function Trucks() {
  const [trucks, setTrucks] = useState([]);

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
        <List>
          {trucks.map((truck) => (
            <ListItem key={truck._id}>
              <strong>
                {truck.chassisId} by {truck.customer}
              </strong>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Trucks;
