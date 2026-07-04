import "./InfoPage.css";

function EnviosPage() {
  return (
    <main className="info-page">
      <h1>Envíos</h1>
      <p className="subtitle">Toda la info sobre cómo te llega tu pedido.</p>

      <div className="highlight-box">
        <p>🚚 ¡Envío GRATIS en compras mayores a $50!</p>
      </div>

      <h2>Tiempos de entrega</h2>
      <ul>
        <li><strong>Quito y Guayaquil:</strong> 24 a 48 horas hábiles</li>
        <li><strong>Cuenca, Ambato, Manta:</strong> 2 a 3 días hábiles</li>
        <li><strong>Resto del país:</strong> 3 a 5 días hábiles</li>
        <li><strong>Galápagos:</strong> 5 a 7 días hábiles</li>
      </ul>

      <h2>Métodos de envío</h2>
      <p>
        Trabajamos con las mejores logísticas del país para garantizar que tu
        paquete llegue en perfecto estado:
      </p>
      <ul>
        <li><strong>Servientrega</strong> — Envío a domicilio y sucursal</li>
        <li><strong>Tramaco Express</strong> — Envío a domicilio</li>
        <li><strong>Urbano</strong> — Envío a domicilio (Quito y Guayaquil)</li>
        <li><strong>Retiro en tienda</strong> — Sin costo en nuestro local (Quito)</li>
      </ul>

      <h2>Seguimiento</h2>
      <p>
        Una vez despachado tu pedido, recibirás un mensaje por WhatsApp con el
        código de seguimiento para rastrear tu paquete en tiempo real.
      </p>

      <h2>¿Cómo funciona?</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <div className="step-content">
            <h4>Haz tu pedido</h4>
            <p>Elige tus productos y completa el checkout</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <div className="step-content">
            <h4>Preparamos tu paquete</h4>
            <p>En 24 horas hábiles tu pedido está listo para despachar</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <div className="step-content">
            <h4>Te lo enviamos</h4>
            <p>Recibes el código de tracking por WhatsApp</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">4</span>
          <div className="step-content">
            <h4>¡Disfruta!</h4>
            <p>Recibe tu pedido y estrena tu nueva ropa</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EnviosPage;
