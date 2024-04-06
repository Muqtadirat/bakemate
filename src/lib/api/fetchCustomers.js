import axios from "axios";
const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function fetchCustomers() {
  try {
    const res = await axios.get(`${apiUrl}customers`);
    return res.data;
  } catch (error) {
    console.log("Error fetching customers...", error);
  }
}
