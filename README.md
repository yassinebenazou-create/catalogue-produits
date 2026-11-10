# TP : Développement d'une application Catalogue Produits avec React

Application monopage (SPA) développée avec **React**, **Vite**, **React Router**, **Context API** et l'API publique **DummyJSON**.

## Technologies utilisées
- **Vite + React**
- **React Router DOM** (Routage dynamique, route protégée, page 404)
- **React Context API** (`CartContext` et `AuthContext`)
- **API REST publique** : [DummyJSON](https://dummyjson.com) consommée avec `fetch` et `async/await`
- **Optimisation & Robustesse** : `React.lazy`, `Suspense`, `ErrorBoundary`
- **Tests** : **Vitest** & **React Testing Library**

## Structure du projet
```text
catalogue-produits/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ErrorBoundary.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   └── Admin.jsx
│   ├── services/
│   │   └── api.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## Installation et lancement

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Exécuter les tests unitaires et d'intégration** :
   ```bash
   npm test
   ```
