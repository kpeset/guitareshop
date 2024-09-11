import axios from "axios";

export function getGuitars() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/guitars`)
    .then((response) => response.data.result)
    .catch((error) => console.error(error));
}

export function getGuitarsById() {
  // so something
}
