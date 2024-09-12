import axios from "axios";

export function getGuitars(type) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/guitars?type=${type}`)
    .then((response) => response.data.result)
    .catch((error) => console.error(error));
}

export function getTypes() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/types`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
