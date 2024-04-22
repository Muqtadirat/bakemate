import axios from "axios";
// const apiUrl = import.meta.env.VITE_MOCK_API_URL;
const apiUrl = import.meta.env.VITE_JSONIO_API_URL;

export default async function fetchCustomers() {
  try {
    const res = await axios.get(apiUrl);
    const customers= res.data.record.customers
    return customers;
  } catch (error) {
    console.log("Error fetching customers...", error);
  }
}
