import axios from "axios";

const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function registerSubser({
  fname,
  lname,
  email,
  number,
  gender,
  role,
  avatar,
}) {
  try {
    const res = await axios.post(`${apiUrl}subUsers`, {
      fname,
      lname,
      email,
      number,
      gender,
      role,
      avatar,
    });
    return res.data;
  } catch (error) {
    console.error("Error creating sub seller", error);
    throw error;
  }
}
