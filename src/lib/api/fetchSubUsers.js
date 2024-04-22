import axios from "axios";
// const apiUrl = import.meta.env.VITE_MOCK_API_URL;
const apiUrl = import.meta.env.VITE_JSONIO_API_URL;

export default async function fetchSubUsers() {
  try {
    const res = await axios.get(apiUrl);
    const subUsers = res.data.record.subUsers;
    return subUsers
  } catch (error) {
    console.log("Error fetching sub user...", error);
  }
}
