// botones para filtrar los juegos por categoría
function Filtros({ categorias, categoriaActiva, onCambiar }) {
  // agrego "Todos" al principio para poder sacar el filtro
  const opciones = ["Todos", ...categorias];

  return (
    <div
      className="d-flex flex-wrap gap-2 mb-4"
      role="group"
      aria-label="Filtrar por categoría"
    >
      {opciones.map((categoria) => (
        <button
          key={categoria}
          type="button"
          className={
            categoria === categoriaActiva ? "btn btn-filtro activo" : "btn btn-filtro"
          }
          onClick={() => onCambiar(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
