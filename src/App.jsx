import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';

// Chargement différé des pages avec React.lazy
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="status-box" role="status">
                <div className="spinner"></div>
                <p>Chargement de la page...</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/produits/:id" element={<ProductDetails />} />
              <Route path="/panier" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <section className="not-found-page">
                    <div className="status-box">
                      <h1 className="code-404">404</h1>
                      <h2>Page introuvable</h2>
                      <p>La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
                      <Link to="/" className="btn-primary">
                        Retour à l&apos;accueil
                      </Link>
                    </div>
                  </section>
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
