import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  const discount = totalPrice * 0.12;
  const finalTotal = totalPrice - discount;

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="status-box">
          <h2>Votre panier est vide</h2>
          <p>Ajoutez des produits depuis le catalogue pour commencer vos achats.</p>
          <Link to="/produits" className="btn-primary">
            Parcourir les produits
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="page-header">
        <h1>Mon Panier</h1>
        <button onClick={clearCart} className="btn-outline">
          Vider le panier
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-img"
              />

              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="cart-item-category">{item.category}</p>
                <span className="cart-item-unit">${item.price} / unité</span>
              </div>

              <div className="cart-item-controls">
                <div className="qty-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="qty-btn"
                    aria-label="Diminuer la quantité"
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn qty-btn-plus"
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>

                <span className="cart-item-subtotal">
                  Total ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-delete"
                  title="Supprimer"
                  aria-label={`Supprimer ${item.title}`}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Résumé de la commande</h3>
          <div className="promo-banner">
            <span>Remise (12%)</span>
            <span className="promo-badge">Active</span>
          </div>

          <div className="summary-row">
            <span>Total Produits</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <div className="summary-row discount-row">
            <span>Remise (12%)</span>
            <strong>-${discount.toFixed(2)}</strong>
          </div>
          <hr />
          <div className="summary-row total-row">
            <span>Total à payer</span>
            <strong>${finalTotal.toFixed(2)}</strong>
          </div>

          <button
            onClick={() => {
              alert('Commande validée avec succès ! Merci pour votre achat.');
              clearCart();
            }}
            className="btn-primary btn-block"
          >
            Procéder au paiement
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
