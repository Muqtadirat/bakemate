import axios from "axios";

const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function loginUser({ email, password }) {
  try {
    const res = await axios.post(`${apiUrl}users`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
}
