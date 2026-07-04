import { Link } from "react-router-dom";
import { PRODUCTOS } from "../data/productos";
import ProductCard from "../components/ProductCard";
import "./FavoritosPage.css";

function FavoritosPage({ favoritos, onToggleFav }) {
  const productosFavs = PRODUCTOS.filter((p) => favoritos.includes(p.id));

  return (
    <main className="favoritos-page">
      <h1>Mis Favoritos</h1>

      {productosFavs.length === 0 ? (
        <div className="favs-empty">
          <p>No tenés favoritos todavía</p>
          <Link to="/" className="btn-explorar">Explorar productos</Link>
        </div>
      ) : (
        <div className="favs-grid">
          {productosFavs.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              esFavorito={true}
              onToggleFav={onToggleFav}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavoritosPage;
