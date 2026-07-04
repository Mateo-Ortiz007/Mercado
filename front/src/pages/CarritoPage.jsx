import { Link } from "react-router-dom";
import "./CarritoPage.css";

function CarritoPage({ carrito, onCambiarQty, onEliminar }) {
  const total = carrito.reduce((s, p) => s + p.precio * p.qty, 0);

  return (
    <main className="carrito-page">
      <h1>Tu Carrito</h1>

      {carrito.length === 0 ? (
        <div className="carrito-empty">
          <p>Tu carrito está vacío</p>
          <Link to="/" className="btn-seguir">Seguir comprando</Link>
        </div>
      ) : (
        <div className="carrito-layout">
          <div className="carrito-items">
            {carrito.map((item, i) => (
              <div className="carrito-item" key={`${item.id}-${item.talla}-${item.color}-${i}`}>
                <img src={item.imagen} alt={item.nombre} />
                <div className="carrito-item-info">
                  <h3>{item.nombre}</h3>
                  <p className="item-variant">
                    Talla: {item.talla} • Color: {item.color}
                  </p>
                  <p className="item-price">${item.precio.toLocaleString()}</p>
                </div>
                <div className="carrito-item-actions">
                  <div className="qty-control">
                    <button onClick={() => onCambiarQty(i, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onCambiarQty(i, 1)}>+</button>
                  </div>
                  <button className="btn-remove" onClick={() => onEliminar(i)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-summary">
            <h3>Resumen</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Envío</span>
              <span className="free-shipping">Gratis</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button className="btn-checkout">Finalizar compra</button>
            <Link to="/" className="link-seguir">← Seguir comprando</Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default CarritoPage;
