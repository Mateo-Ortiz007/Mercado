function ProveedoresCard({ proveedor, onClick }) {
  const tipo =
    proveedor.tipoDeProducto ||
    proveedor.tipodeproducto ||
    proveedor.tipodeproductos ||
    "No especificado";

  return (
    <div className="provider-card" onClick={() => onClick(proveedor)}>
      <h3 className="provider-card-title">{proveedor.nombre}</h3>
      <p className="provider-card-company">{proveedor.empresa}</p>
      <p className="provider-card-type">{tipo}</p>
    </div>
  );
}

export default ProveedoresCard;
