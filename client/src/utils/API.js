import axios from "axios";

export default {
  // Gets all books
  getTrucks: function() {
    return axios.get("/api/trucks");
  },
  // Gets the book with the given id
  getTruck: function(id) {
    return axios.get("/api/trucks/" + id);
  },
  // Saves a book to the database
  saveTruck: function(truckData) {
    console.log(truckData);
    return axios.post("/api/trucks", truckData);
  }
};
