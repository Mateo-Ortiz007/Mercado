import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./modules/productsScreens/productos";
import Proveedores from "./modules/proveedoresScreens/proveedores";
import Login from "./modules/login_and_register/login";
import Register from "./modules/login_and_register/register";
import Homepage from "./modules/homepage";
import ProveedoresShow from "./modules/proveedoresScreens/proveedoresShow";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/ProveedoresShow" element={<ProveedoresShow />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
