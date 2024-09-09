const BASE_URL = 'https://fakestoreapi.com'; // base URL for the API

// Function to fetch list of products from API
export const fetchProducts = async () => {
  try {
    // Send GET request to product endpoint
    const response = await fetch(`${BASE_URL}/products`);
    // Checking if the response was successful, if not throw error
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    // Parse the response JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    // Logging error to console, was useful for debugging
    console.error('Error fetching products:', error);
    return [];
  }
};

// Function to fetch single product by ID from API
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch product by ID:', error);
    return null;
  }
};