import axios from "axios";

async function getAllProductCategories() {
  try {
    const response = await axios.get("http://localhost:5000/api/v2/categories");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching product categories:", error);
    return [];
  }
}

export default getAllProductCategories;
