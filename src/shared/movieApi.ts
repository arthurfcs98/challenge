import axios from "axios";

export const movieApi = axios.create({
  baseURL: "http://54.94.208.8:5001",
});
