const axios = require("axios");

const PRODAXIOS_URL = "http://localhost:8080/api/products";

async function getProducts() {
  const { data } = await axios.get(PRODAXIOS_URL);
  console.log(data);
}
getProducts();
