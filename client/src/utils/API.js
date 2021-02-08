import axios from "axios";

export default {
  // Gets all books
  getTrucks: function() {
    return axios.get("/api/trucks");
  },
  getArchives: function() {
    const truckData = axios.get("/api/trucks/archives");
    console.log(truckData);
    return axios.get("/api/trucks/archives");
  },
  // Gets the book with the given id
  getTruck: function(id) {
    return axios.get("/api/trucks/" + id);
  },
  // Saves a book to the database
  saveTruck: function(truckData) {
        return axios.post("/api/trucks", truckData);
  },
  
  updateTruck: function(truckData) {
    return axios.put("/api/trucks/" + truckData._id, truckData);
  }
};
