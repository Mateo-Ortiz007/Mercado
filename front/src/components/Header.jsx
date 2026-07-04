import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cantidadCarrito, cantidadFavs, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          DO BRONX<span>.</span>
        </Link>

        <div className="header-search">
          <input type="text" placeholder="Buscar productos..." disabled />
        </div>

        <nav className="header-icons">
          <button
            className="theme-toggle"
            onClick={onToggleDark}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <Link to="/favoritos" className="header-icon" title="Favoritos">
            ♡
            {cantidadFavs > 0 && <span className="badge">{cantidadFavs}</span>}
          </Link>
          <Link to="/carrito" className="header-icon" title="Carrito">
            🛒
            {cantidadCarrito > 0 && <span className="badge">{cantidadCarrito}</span>}
          </Link>
          <Link to="/cuenta" className="header-icon" title="Mi cuenta">
            👤
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
