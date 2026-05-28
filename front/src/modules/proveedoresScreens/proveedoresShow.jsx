import { useEffect, useState } from "react";
import "../../styles/home.css";
import "./proveedoresShow.css";
import ProveedoresCard from "./ProveedoresCard";
import ProveedoresModal from "./ProveedoresModal";
import Header from "../header";

function ProveedoresShow() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const [openProveedores, setOpenProveedores] = useState(false);
  const [proveedor, setProveedor] = useState(null);
  const [proveedores, setProveedores] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [verCarrito, setVerCarrito] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  const cantidad = carrito.reduce((sum, item) => sum + (item.qty || 0), 0);

  useEffect(() => {
    fetch(`${API_URL}/proveedores`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProveedores(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error cargando proveedores:", err);
        setError(
          "No se pudieron cargar los proveedores. Revisa el backend y vuelve a intentarlo.",
        );
      });
  }, [API_URL]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const abrirProveedoresModal = (p) => {
    setProveedor(p);
    setOpenProveedores(true);
  };

  const cerrarProveedorModal = () => {
    setProveedor(null);
    setOpenProveedores(false);
  };

  const cambiarQty = (id, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * (item.qty || 1),
    0,
  );

  const normalizedSearch = search.toLowerCase();

  return (
    <div className="proveedores-show">
      <Header
        cantidad={cantidad}
        onCarrito={() => setVerCarrito(!verCarrito)}
        onSearch={setSearch}
      />

      {error && <div className="provider-empty-state">{error}</div>}

      {!verCarrito && !checkout && (
        <div className="proveedores-container">
          {proveedores
            .filter((p) => {
              const tipo = (
                p.tipoDeProducto ||
                p.tipodeproducto ||
                p.tipodeproductos ||
                ""
              ).toLowerCase();
              return (
                p.nombre.toLowerCase().includes(normalizedSearch) ||
                p.empresa.toLowerCase().includes(normalizedSearch) ||
                tipo.includes(normalizedSearch)
              );
            })
            .map((p) => (
              <ProveedoresCard
                key={p.id}
                proveedor={p}
                onClick={abrirProveedoresModal}
              />
            ))}
        </div>
      )}

      {verCarrito && !checkout && (
        <div className="carrito">
          <h2>Tu carrito</h2>
          {carrito.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío</p>
          ) : (
            carrito.map((item) => (
              <div className="item" key={item.id}>
                <img
                  src={`http://localhost:3000/uploads/${item.imagen}`}
                  className="img-carrito"
                  alt={item.nombre}
                />
                <span>{item.nombre}</span>
                <div className="qty">
                  <button onClick={() => cambiarQty(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => cambiarQty(item.id, 1)}>+</button>
                </div>
                <span>${item.precio * item.qty}</span>
              </div>
            ))
          )}

          <h3>Total: ${total}</h3>

          <button
            className="btn-checkout"
            disabled={carrito.length === 0}
            onClick={() => setCheckout(true)}
          >
            Continuar compra
          </button>
        </div>
      )}

      {checkout && (
        <div className="checkout">
          <h2>Resumen de compra</h2>
          {carrito.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>{item.nombre}</span>
              <span>
                {item.qty} x ${item.precio}
              </span>
            </div>
          ))}

          <h3>Total a pagar: ${total}</h3>

          <button
            className="btn-pagar"
            onClick={() => {
              alert("🎉 Compra realizada 🎉");
              setCarrito([]);
              setCheckout(false);
              setVerCarrito(false);
            }}
          >
            Pagar
          </button>
          <button
            className="btn-pagar"
            onClick={() => {
              setCheckout(false);
              setVerCarrito(false);
            }}
          >
            cancelar
          </button>
        </div>
      )}

      {openProveedores && (
        <ProveedoresModal
          proveedor={proveedor}
          onClose={cerrarProveedorModal}
        />
      )}
    </div>
  );
}

export default ProveedoresShow;
