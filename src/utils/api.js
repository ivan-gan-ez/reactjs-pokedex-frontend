import axios from "axios";

const API_URL = "http://localhost:5000/";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/

export async function getPokemons(search, type) {
  const response = await axios.get(
    API_URL +
      "pokemons" +
      (search === "" ? "" : "?search=" + search) +
      (type === "All" ? "" : search === "" ? "?type=" + type : "&type=" + type)
  );
  return response.data;
}

/* INSTRUCTION: Create a function to fetch types from the API. */

export async function getTypes() {
  const response = await axios.get(API_URL + "types");
  return response.data;
}
