// botones para filtrar los juegos por categoría
// el estado vive en App, acá solo se avisa qué botón se apretó
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
