import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductoPage from "./pages/ProductoPage";
import CarritoPage from "./pages/CarritoPage";
import FavoritosPage from "./pages/FavoritosPage";
import CuentaPage from "./pages/CuentaPage";
import SobreNosotros from "./pages/SobreNosotros";
import EnviosPage from "./pages/EnviosPage";
import CambiosPage from "./pages/CambiosPage";
import TallesPage from "./pages/TallesPage";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, { ...producto, qty: 1 }]);
  };

  const cambiarQty = (index, delta) => {
    setCarrito((prev) =>
      prev
        .map((item, i) =>
          i === index ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const eliminarDelCarrito = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const cantidadCarrito = carrito.reduce((s, p) => s + p.qty, 0);

  return (
    <BrowserRouter>
      <Header
        cantidadCarrito={cantidadCarrito}
        cantidadFavs={favoritos.length}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />
      <Navbar />

      <div className="app-content">
        <Routes>
          {/* Tienda */}
          <Route
            path="/"
            element={<HomePage favoritos={favoritos} onToggleFav={toggleFavorito} />}
          />
          <Route
            path="/producto/:id"
            element={
              <ProductoPage
                onAgregar={agregarAlCarrito}
                favoritos={favoritos}
                onToggleFav={toggleFavorito}
              />
            }
          />
          <Route
            path="/carrito"
            element={
              <CarritoPage
                carrito={carrito}
                onCambiarQty={cambiarQty}
                onEliminar={eliminarDelCarrito}
              />
            }
          />
          <Route
            path="/favoritos"
            element={<FavoritosPage favoritos={favoritos} onToggleFav={toggleFavorito} />}
          />
          <Route path="/cuenta" element={<CuentaPage />} />

          {/* Info pages */}
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/envios" element={<EnviosPage />} />
          <Route path="/cambios" element={<CambiosPage />} />
          <Route path="/talles" element={<TallesPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
