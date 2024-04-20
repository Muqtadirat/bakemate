import axios from "axios";
const apiUrl = import.meta.env.VITE_MOCK_API_URL;

export default async function registerProduct({
  name,
  category,
  // description,
  price,
  // discount,
  stock,
  // threshold,
  image,
}) {
  try {
    const res = await axios.post(`${apiUrl}products`, {
      name,
      category,
      price,
      stock,
      image,
    });
    return res.data;
  } catch (error) {
    console.log("Error registering product", error);
    throw error;
  }
}
