import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header({ cantidad, onCarrito, onSearch }) {
  const navigate = useNavigate(); // ✅ faltaba esto
  const location = useLocation();
  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem("usuario");
    return user ? JSON.parse(user) : null;
  });

  const [ModalDeCerrarSesion, setModalDeCerrarSesion] = useState(false);
  const enProveedores = location.pathname === "/ProveedoresShow";
  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    setModalDeCerrarSesion(false);
    navigate("/home");
  };

  return (
    <header className="ml-header">
      <div className="logo">Mercado Trucho</div>

      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar productos , marcas y más"
      />

      <button className="cart-btn" onClick={onCarrito}>
        🛒 {cantidad}
      </button>
      <button
        className="cart-btn"
        onClick={() => navigate(enProveedores ? "/Home" : "/ProveedoresShow")}
      >
        {enProveedores ? "Productos" : "Nuestros Proveedores"}
      </button>

      {usuario ? (
        <>
          <button onClick={() => setModalDeCerrarSesion(true)}>
            Cerrar Sesion
          </button>

          {ModalDeCerrarSesion && (
            <div className="modal-overlay-close-cesion">
              <div className="modal-close-cesion">
                <p>¿Seguro que deseas cerrar sesión?</p>
                <button onClick={cerrarSesion}>Sí, cerrar</button>
                <button onClick={() => setModalDeCerrarSesion(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <span>
            <a href="/login">Iniciar Sesion</a>
          </span>
          <span>
            <a href="/register"> Registrarse</a>
          </span>
        </>
      )}
    </header>
  );
}

export default Header;
