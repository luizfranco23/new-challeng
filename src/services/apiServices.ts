import axios from "axios";

export async function fetchProductsFromAPI() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
