import "./InfoPage.css";

function CambiosPage() {
  return (
    <main className="info-page">
      <h1>Cambios y Devoluciones</h1>
      <p className="subtitle">Tu satisfacción es nuestra prioridad.</p>

      <div className="highlight-box">
        <p>🔄 Tienes 15 días desde la recepción para solicitar un cambio o devolución.</p>
      </div>

      <h2>Política de Cambios</h2>
      <p>
        Si la prenda no te queda o quieres otro color/talla, puedes cambiarla
        sin costo. Solo necesitamos que:
      </p>
      <ul>
        <li>La prenda esté sin usar y con sus etiquetas originales</li>
        <li>Esté en su empaque original</li>
        <li>No hayan pasado más de 15 días desde la entrega</li>
      </ul>

      <h2>Política de Devoluciones</h2>
      <p>
        Si no quedaste satisfecho con tu compra, puedes devolver el producto
        y te reembolsamos el 100% del valor. El reembolso se acredita
        en 5-10 días hábiles por el mismo medio de pago (transferencia o tarjeta).
      </p>

      <h2>¿Cómo solicitar un cambio?</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <div className="step-content">
            <h4>Contáctanos</h4>
            <p>Escríbenos por WhatsApp o Instagram indicando tu número de pedido</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <div className="step-content">
            <h4>Coordinamos la devolución</h4>
            <p>Puedes enviarlo por Servientrega o dejarlo en nuestro local en Quito</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <div className="step-content">
            <h4>Te enviamos el cambio</h4>
            <p>Una vez recibido, despachamos el nuevo producto en 24-48 horas</p>
          </div>
        </div>
      </div>

      <h2>Excepciones</h2>
      <p>No se aceptan cambios ni devoluciones en los siguientes casos:</p>
      <ul>
        <li>Prendas con signos de uso, lavado o alteración</li>
        <li>Productos de edición limitada marcados como "Venta Final"</li>
        <li>Accesorios (gorras, canguros) por motivos de higiene</li>
      </ul>
    </main>
  );
}

export default CambiosPage;
