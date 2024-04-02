import axios from "axios";
const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function fetchSubUsers() {
  try {
    const res = await axios.get(`${apiUrl}subUsers`);
    return res.data;
  } catch (error) {
    console.log("Error fetching sub user...", error);
  }
}
