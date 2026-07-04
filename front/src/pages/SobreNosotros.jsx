import "./InfoPage.css";

function SobreNosotros() {
  return (
    <main className="info-page">
      <h1>Sobre Nosotros</h1>
      <p className="subtitle">Conoce la historia detrás de DO BRONX.</p>

      <p>
        Nacimos en 2022 con una idea simple: crear ropa urbana de calidad a precios justos.
        Somos un equipo joven ecuatoriano que vive la cultura streetwear y diseña prendas
        que reflejan la identidad de cada persona.
      </p>

      <p>
        Cada colección es pensada con atención al detalle: desde la selección de telas
        hasta los terminados. Trabajamos con proveedores locales en Quito y Guayaquil
        que comparten nuestra visión de moda consciente y sustentable.
      </p>

      <h2>Nuestros Valores</h2>

      <div className="valores-grid">
        <div className="valor-card">
          <span className="valor-icon">🎨</span>
          <h3>Diseño Auténtico</h3>
          <p>Prendas únicas que cuentan una historia</p>
        </div>
        <div className="valor-card">
          <span className="valor-icon">🌱</span>
          <h3>Sustentabilidad</h3>
          <p>Materiales responsables, producción local</p>
        </div>
        <div className="valor-card">
          <span className="valor-icon">💎</span>
          <h3>Calidad Premium</h3>
          <p>Terminados de alta gama a precios justos</p>
        </div>
        <div className="valor-card">
          <span className="valor-icon">🤝</span>
          <h3>Comunidad</h3>
          <p>Más que una marca, un movimiento</p>
        </div>
      </div>

      <h2>Nuestro Compromiso</h2>
      <p>
        Cada prenda DO BRONX está hecha para durar. Usamos algodón premium de 30/1,
        costuras reforzadas y estampados que resisten más de 50 lavados.
        Si no estás 100% satisfecho, te devolvemos el dinero.
      </p>

      <div className="highlight-box">
        <p>📍 Quito, Ecuador — Envíos a todo el país en 24-72 horas.</p>
      </div>
    </main>
  );
}

export default SobreNosotros;
