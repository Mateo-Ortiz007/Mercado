import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ producto, onToggleFav, esFavorito }) {
  const descuento = producto.precioAnterior
    ? Math.round((1 - producto.precio / producto.precioAnterior) * 100)
    : null;

  return (
    <div className="product-card">
      <Link to={`/producto/${producto.id}`} className="product-card-img-wrap">
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
        {producto.nuevo && <span className="tag-new">NUEVO</span>}
        {descuento && <span className="tag-sale">-{descuento}%</span>}
      </Link>

      <button
        className={`fav-btn ${esFavorito ? "active" : ""}`}
        onClick={() => onToggleFav(producto.id)}
        title="Agregar a favoritos"
      >
        {esFavorito ? "♥" : "♡"}
      </button>

      <div className="product-card-info">
        <Link to={`/producto/${producto.id}`} className="product-card-name">
          {producto.nombre}
        </Link>
        <div className="product-card-price">
          <span className="price-current">${producto.precio.toLocaleString()}</span>
          {producto.precioAnterior && (
            <span className="price-old">${producto.precioAnterior.toLocaleString()}</span>
          )}
        </div>
        <p className="product-card-colors">
          {producto.colores.length} {producto.colores.length === 1 ? "color" : "colores"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
