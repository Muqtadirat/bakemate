import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default async function registerUser({
  fullName,
  email,
  password,
  confirmPassword,
}) {
  try {
    const res = await axios.post(`${apiUrl}users`, {
      fullName,
      email,
      password,
      confirmPassword,
    });
    return res.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
}
