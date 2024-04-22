import axios from "axios";
// const apiUrl = import.meta.env.VITE_MOCK_API_URL;
const apiUrl = import.meta.env.VITE_JSONIO_API_URL;

export default async function fetchProducts() {
  try {
    const res = await axios.get(apiUrl);
    const products = res.data.record.products;
    return products;
  } catch (error) {
    console.log("Error fetching products...", error);
  }
}
