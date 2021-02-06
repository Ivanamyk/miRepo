import axios from "axios";

const api = axios.create({
  baseURL: "https://ada-frontend-e41ad-default-rtdb.firebaseio.com",
});

export { api };
