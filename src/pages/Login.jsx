import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('etudiant');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Veuillez saisir un nom d’utilisateur et un mot de passe.');
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Connexion</h1>
        <p className="subtitle">
          Authentification simulée pour accéder à l&apos;espace Administration
        </p>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nom d&apos;utilisateur</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ex: admin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary btn-block">
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
