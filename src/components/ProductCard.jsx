import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price} $</p>

        <div className="product-actions">
          <Link to={`/produits/${product.id}`} className="btn-secondary">
            Détails
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="btn-primary"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
