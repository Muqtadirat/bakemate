import axios from "axios";
// const apiUrl = import.meta.env.VITE_MOCK_API_URL;
const apiUrl = import.meta.env.VITE_JSONIO_API_URL;

export default async function fetchData() {
  try {
    const res = await axios.get(apiUrl);
    const data = res.data.record.data;
    return data;
  } catch (error) {
    console.log("Error fecthing data", error);
  }
}
