import "./CuentaPage.css";

function CuentaPage() {
  return (
    <main className="cuenta-page">
      <h1>Mi Cuenta</h1>

      <div className="cuenta-grid">
        <div className="cuenta-card">
          <span className="cuenta-icon">📦</span>
          <h3>Mis Pedidos</h3>
          <p>No tenés pedidos recientes</p>
        </div>

        <div className="cuenta-card">
          <span className="cuenta-icon">📍</span>
          <h3>Direcciones</h3>
          <p>Agregá tu dirección de envío</p>
        </div>

        <div className="cuenta-card">
          <span className="cuenta-icon">💳</span>
          <h3>Métodos de Pago</h3>
          <p>Agregá una tarjeta o método</p>
        </div>

        <div className="cuenta-card">
          <span className="cuenta-icon">👤</span>
          <h3>Datos Personales</h3>
          <p>Editá tu información</p>
        </div>
      </div>
    </main>
  );
}

export default CuentaPage;
