import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PRODUCTOS } from "../data/productos";
import "./ProductoPage.css";

function ProductoPage({ onAgregar, favoritos, onToggleFav }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = PRODUCTOS.find((p) => p.id === Number(id));

  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const [agregado, setAgregado] = useState(false);

  if (!producto) {
    return (
      <div className="producto-page">
        <p className="not-found">Producto no encontrado</p>
      </div>
    );
  }

  const esFavorito = favoritos.includes(producto.id);
  const descuento = producto.precioAnterior
    ? Math.round((1 - producto.precio / producto.precioAnterior) * 100)
    : null;

  const handleAgregar = () => {
    if (!tallaSeleccionada || !colorSeleccionado) return;
    onAgregar({ ...producto, talla: tallaSeleccionada, color: colorSeleccionado });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <main className="producto-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="producto-layout">
        <div className="producto-gallery">
          <img src={producto.imagen} alt={producto.nombre} />
          {producto.nuevo && <span className="tag-new">NUEVO</span>}
        </div>

        <div className="producto-details">
          <p className="producto-cat">{producto.categoria}</p>
          <h1>{producto.nombre}</h1>

          <div className="producto-price">
            <span className="price-main">${producto.precio.toLocaleString()}</span>
            {producto.precioAnterior && (
              <>
                <span className="price-old">${producto.precioAnterior.toLocaleString()}</span>
                <span className="price-badge">-{descuento}%</span>
              </>
            )}
          </div>

          <p className="producto-desc">{producto.descripcion}</p>

          {/* Tallas */}
          <div className="option-group">
            <label>Talla</label>
            <div className="option-chips">
              {producto.tallas.map((t) => (
                <button
                  key={t}
                  className={`chip ${tallaSeleccionada === t ? "selected" : ""}`}
                  onClick={() => setTallaSeleccionada(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Colores */}
          <div className="option-group">
            <label>Color</label>
            <div className="option-chips">
              {producto.colores.map((c) => (
                <button
                  key={c}
                  className={`chip ${colorSeleccionado === c ? "selected" : ""}`}
                  onClick={() => setColorSeleccionado(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Acciones */}
          <div className="producto-actions">
            <button
              className={`btn-add ${agregado ? "added" : ""}`}
              onClick={handleAgregar}
              disabled={!tallaSeleccionada || !colorSeleccionado}
            >
              {agregado ? "✓ Agregado" : "Agregar al carrito"}
            </button>
            <button
              className={`btn-fav ${esFavorito ? "active" : ""}`}
              onClick={() => onToggleFav(producto.id)}
            >
              {esFavorito ? "♥" : "♡"}
            </button>
          </div>

          {(!tallaSeleccionada || !colorSeleccionado) && (
            <p className="hint">Seleccioná talla y color para agregar al carrito</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductoPage;
