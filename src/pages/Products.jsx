import { useState, useEffect } from 'react';
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from '../services/api';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data =
          selectedCategory === 'all'
            ? await fetchProducts()
            : await fetchProductsByCategory(selectedCategory);
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Impossible de récupérer les produits.');
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products-page">
      <div className="page-header">
        <div>
          <h1>Catalogue des Produits</h1>
          <p className="subtitle">
            Découvrez nos articles disponibles ({filteredProducts.length} produits)
          </p>
        </div>

        <div className="filters-bar">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
            aria-label="Filtrer par catégorie"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((cat) => {
              const slug = typeof cat === 'string' ? cat : cat.slug;
              const name = typeof cat === 'string' ? cat : cat.name;
              return (
                <option key={slug} value={slug}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {loading && (
        <div className="status-box" role="status">
          <div className="spinner"></div>
          <p>Chargement des produits en cours...</p>
        </div>
      )}

      {error && (
        <div className="status-box error-box" role="alert">
          <p>Erreur : {error}</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="btn-primary"
          >
            Réessayer
          </button>
        </div>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <div className="status-box">
          <p>Aucun produit ne correspond à votre recherche.</p>
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
