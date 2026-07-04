import { useLocation } from "react-router-dom";
import { PRODUCTOS } from "../data/productos";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

function HomePage({ favoritos, onToggleFav }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoriaActual = params.get("cat") || "Todos";

  const productosFiltrados =
    categoriaActual === "Todos"
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === categoriaActual);

  return (
    <main className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Nueva Colección 2026</span>
          <h1>Streetwear que define tu estilo</h1>
          <p>Prendas únicas diseñadas para los que marcan tendencia.</p>
          <a href="#productos" className="hero-btn">Ver colección</a>
        </div>
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=700&fit=crop"
            alt="Modelo"
          />
        </div>
      </section>

      {/* Productos */}
      <section className="products-section" id="productos">
        <div className="products-header">
          <h2>{categoriaActual === "Todos" ? "Todos los productos" : categoriaActual}</h2>
          <span className="products-count">{productosFiltrados.length} productos</span>
        </div>

        <div className="products-grid">
          {productosFiltrados.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              esFavorito={favoritos.includes(p.id)}
              onToggleFav={onToggleFav}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
