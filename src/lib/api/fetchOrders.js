import axios from "axios";
const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function fetchOrders() {
  try {
    const res = await axios.get(`${apiUrl}orders`);
    return res.data;
  } catch (error) {
    console.log("Error fetching orders...", error);
  }
}
