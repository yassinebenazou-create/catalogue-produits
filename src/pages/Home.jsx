import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="hero-card">
        <span className="hero-badge">Application React + Vite</span>
        <h1>Bienvenue sur notre Catalogue Produits</h1>
        <p>
          Explorez notre sélection de produits récupérés en temps réel depuis
          l&apos;API publique <strong>DummyJSON</strong>. Consultez les fiches
          détaillées et gérez votre panier facilement.
        </p>
        <div className="hero-buttons">
          <Link to="/produits" className="btn-primary btn-large">
            Accéder au catalogue
          </Link>
          <Link to="/panier" className="btn-secondary btn-large">
            Voir mon panier
          </Link>
        </div>
      </div>

      <div className="features-grid">
        <Link to="/produits" className="feature-box feature-green">
          <h3>Catalogue</h3>
          <p>/produits — Liste dynamique et filtrage par catégorie</p>
        </Link>

        <Link to="/produits/1" className="feature-box feature-teal">
          <h3>Détails</h3>
          <p>/produits/:id — Fiche complète d&apos;un produit</p>
        </Link>

        <Link to="/panier" className="feature-box feature-orange">
          <h3>Panier</h3>
          <p>/panier — Gestion globale avec Context API</p>
        </Link>

        <Link to="/admin" className="feature-box feature-purple">
          <h3>Administration</h3>
          <p>/admin — Espace sécurisé par route protégée</p>
        </Link>
      </div>
    </section>
  );
}

export default Home;
