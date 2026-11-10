const BASE_URL = 'https://dummyjson.com';

// Récupérer la liste de tous les produits
export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des produits');
  }
  const data = await response.json();
  return data.products;
}

// Récupérer un produit par son ID
export async function fetchProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Produit introuvable');
  }
  return await response.json();
}

// Récupérer la liste des catégories
export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des catégories');
  }
  return await response.json();
}

// Récupérer les produits par catégorie
export async function fetchProductsByCategory(category) {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!response.ok) {
    throw new Error('Erreur lors du filtrage par catégorie');
  }
  const data = await response.json();
  return data.products;
}
