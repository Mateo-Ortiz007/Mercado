import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

function Header({ cantidad, onCarrito, onSearch }) {
  const navigate = useNavigate(); // ✅ faltaba esto

  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem("usuario");
    return user ? JSON.parse(user) : null;
  });

  const [ModalDeCerrarSesion, setModalDeCerrarSesion] = useState(false);

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

      {usuario ? (
        <>
          <span>Hola, {usuario.nombreDeUsuario}</span>
          <button
            className="cerrar-buton-cesion"
            onClick={() => setModalDeCerrarSesion(true)}
          >
            Cerrar Sesion
          </button>

          {ModalDeCerrarSesion && (
            <div className="modal-overlay-close-cesion">
              <div className="modal-close-cesion">
                <p>¿Seguro que deseas cerrar sesión?</p>
                <button className="cerrar-buton-cesion" onClick={cerrarSesion}>
                  Sí, cerrar
                </button>
                <button onClick={() => setModalDeCerrarSesion(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <button
            className="boton-pa-iniciar"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesion
          </button>

          <button
            className="boton-pa-iniciar"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
