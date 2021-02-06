import axios from "axios";

export default {
  // Gets all books
  getTrucks: function() {
    return axios.get("/api/trucks");
  },
  // Gets the book with the given id
  getTruck: function(id) {
    console.log(id);
    const truckData = axios.get("/api/trucks/" + id);
    console.log(truckData);
    return axios.get("/api/trucks/" + id);
  },
  // Saves a book to the database
  saveTruck: function(truckData) {
        return axios.post("/api/trucks", truckData);
  },
  
  updateTruck: function(truckData) {
    console.log(truckData);
    return axios.put("/api/trucks/" + truckData._id, truckData);
  }
};
