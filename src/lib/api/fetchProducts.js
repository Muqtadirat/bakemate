import axios from "axios";
const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function fetchProducts() {
  try {
    const res = await axios.get(`${apiUrl}products`);
    return res.data;
  } catch (error) {
    console.log("Error fetching products...", error);
  }
}
