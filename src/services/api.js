import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com",
});

// https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse GET
export default api;
