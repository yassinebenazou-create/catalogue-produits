import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        setProduct(data);
        setSelectedImage(data.thumbnail || data.images?.[0] || '');
      } catch (err) {
        setError(err.message || 'Impossible de charger ce produit.');
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="status-box" role="status">
        <div className="spinner"></div>
        <p>Chargement des détails du produit...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="status-box error-box" role="alert">
        <p>Erreur : {error || 'Produit introuvable'}</p>
        <Link to="/produits" className="btn-primary">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <section className="detail-page">
      <Link to="/produits" className="back-link">
        Retour aux produits
      </Link>

      <div className="detail-card">
        <div className="detail-gallery">
          <div className="main-image-box">
            <img
              src={selectedImage}
              alt={product.title}
              className="detail-main-image"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-list">
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={
                    selectedImage === imgUrl ? 'thumb-btn active' : 'thumb-btn'
                  }
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`${product.title} ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <span className="category-tag">{product.category}</span>
          <h1>{product.title}</h1>
          {product.brand && (
            <p className="detail-brand">
              Marque : <strong>{product.brand}</strong>
            </p>
          )}

          <div className="detail-rating">
            Note : {product.rating || '4.5'} / 5 | Stock : {product.stock ?? 10}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-price-box">
            <span className="detail-price">${product.price}</span>
            {product.discountPercentage && (
              <span className="discount-badge">
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          <div className="detail-actions">
            <button
              onClick={() => addToCart(product)}
              className="btn-primary btn-large"
            >
              Ajouter au panier
            </button>
            <Link to="/panier" className="btn-secondary btn-large">
              Voir le panier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
