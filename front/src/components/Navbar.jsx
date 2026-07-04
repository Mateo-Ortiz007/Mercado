import { Link, useLocation } from "react-router-dom";
import { CATEGORIAS } from "../data/productos";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoriaActual = params.get("cat") || "Todos";

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {CATEGORIAS.map((cat) => (
          <Link
            key={cat}
            to={cat === "Todos" ? "/" : `/?cat=${cat}`}
            className={`navbar-link ${categoriaActual === cat ? "active" : ""}`}
          >
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
