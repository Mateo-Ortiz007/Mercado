import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4 className="footer-logo">DO BRONX<span>.</span></h4>
          <p>Moda urbana para los que se atreven. Envíos gratis a todo Ecuador en compras mayores a $50.</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">📸</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok">🎵</a>
            <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer" title="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Tienda</h5>
          <Link to="/?cat=Remeras">Remeras</Link>
          <Link to="/?cat=Pantalones">Pantalones</Link>
          <Link to="/?cat=Buzos">Buzos</Link>
          <Link to="/?cat=Camperas">Camperas</Link>
          <Link to="/?cat=Zapatillas">Zapatillas</Link>
          <Link to="/?cat=Accesorios">Accesorios</Link>
        </div>

        <div className="footer-col">
          <h5>Información</h5>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <Link to="/envios">Envíos</Link>
          <Link to="/cambios">Cambios y devoluciones</Link>
          <Link to="/talles">Guía de talles</Link>
        </div>

        <div className="footer-col">
          <h5>Contacto</h5>
          <a href="https://instagram.com/drip" target="_blank" rel="noreferrer">@drip en Instagram</a>
          <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:hola@dobronx.ec">hola@dobronx.ec</a>
          <p className="footer-address">Quito, Ecuador</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DO BRONX. Todos los derechos reservados.</p>
        <div className="footer-payments">
          <span title="Visa">💳</span>
          <span title="Mastercard">💳</span>
          <span title="Mercado Pago">🏦</span>
          <span title="Transferencia">🏧</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
