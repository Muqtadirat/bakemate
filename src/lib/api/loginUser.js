import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default async function loginUser({ username, password }) {
  try {
    const res = await axios.post(`${apiUrl}users`, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
}
