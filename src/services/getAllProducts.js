import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    return response.data.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
