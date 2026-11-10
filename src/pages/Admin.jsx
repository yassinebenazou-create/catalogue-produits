import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Admin() {
  const { user, logout } = useAuth();
  const { totalItems, totalPrice } = useCart();

  return (
    <section className="admin-page">
      <div className="admin-card">
        <div className="admin-header">
          <div>
            <span className="hero-badge">Route Protégée</span>
            <h1>Espace Administration</h1>
            <p className="subtitle">
              Bienvenue <strong>{user?.username}</strong> dans le tableau de bord
              administrateur.
            </p>
          </div>
          <button onClick={logout} className="btn-outline">
            Se déconnecter
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">API Source</span>
            <strong className="stat-value">DummyJSON</strong>
          </div>
          <div className="stat-box">
            <span className="stat-label">Articles dans le panier actif</span>
            <strong className="stat-value">{totalItems}</strong>
          </div>
          <div className="stat-box">
            <span className="stat-label">Montant du panier</span>
            <strong className="stat-value">${totalPrice.toFixed(2)}</strong>
          </div>
        </div>

        <div className="admin-actions">
          <Link to="/produits" className="btn-primary">
            Gérer le catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Admin;
