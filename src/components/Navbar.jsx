import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/pngtree-skincare-logo-png-image_6387016.png" alt="Logo" className="navbar-logo-img" />
          <div>
            Catalogue<span>Produits</span>
          </div>
        </NavLink>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/produits"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Produits
          </NavLink>
          <NavLink
            to="/panier"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Panier
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Administration
          </NavLink>
        </nav>

        <div className="navbar-auth">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="username">{user.username}</span>
              <button onClick={handleLogout} className="btn-outline">
                Déconnexion
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="btn-primary">
              Connexion
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
