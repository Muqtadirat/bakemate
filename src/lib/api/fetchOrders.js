import axios from "axios";
// const apiUrl = import.meta.env.VITE_MOCK_API_URL;
const apiUrl = import.meta.env.VITE_JSONIO_API_URL;

export default async function fetchOrders() {
  try {
    const res = await axios.get(apiUrl);
    const orders = res.data.record.orders
    return orders;
  } catch (error) {
    console.log("Error fetching orders...", error);
  }
}
