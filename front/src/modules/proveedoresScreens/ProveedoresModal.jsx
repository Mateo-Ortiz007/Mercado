function ProveedoresModal({ proveedor, onClose }) {
  if (!proveedor) return null;

  const tipo =
    proveedor.tipoDeProducto || proveedor.tipodeproductos || "No disponible";

  return (
    <div className="proveedor-overlay" onClick={onClose}>
      <div className="proveedor-modal" onClick={(e) => e.stopPropagation()}>
        <label>Nombre</label>
        <h2>{proveedor.nombre}</h2>

        <label>Empresa</label>
        <p className="precio">{proveedor.empresa}</p>

        <label>Tipo de producto</label>
        <p className="precio">{tipo}</p>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ProveedoresModal;
