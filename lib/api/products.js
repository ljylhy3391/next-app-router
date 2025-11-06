const API_URL = "https://app-router-api-five.vercel.app/api/products";

export async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

export async function fetchProduct(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("상품을 찾을 수 없습니다");
    }

    return await response.json();
  } catch (error) {
    console.log("Error fetching product:", error);
    return null;
  }
}
