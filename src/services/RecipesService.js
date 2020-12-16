import axios from "axios";

const clientApiService = axios.create({
  baseURL:
    "n",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

export default {
  getRecipes() {
    console.log(clientApiService.get("/recipes"));
    return clientApiService.get("/recipes");
  },
  getRecipe(id) {
    console.log(clientApiService.get("/recipes/"));
    return clientApiService.get("/recipes/" + id);
  }
};
