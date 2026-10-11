// una tarjeta (card de bootstrap) con los datos de un videojuego
function TarjetaJuego({ juego, onEliminar }) {
  function confirmarEliminar() {
    if (window.confirm("¿Seguro que quieres eliminar " + juego.nombre + "?")) {
      onEliminar(juego.id);
    }
  }

  return (
    <article className="card tarjeta-juego">
      <img
        src={juego.imagen}
        className="card-img-top tarjeta-imagen"
        alt={"Portada de " + juego.nombre}
        onError={(e) => {
          // si la imagen no existe se pone una por defecto
          e.target.onerror = null;
          e.target.src = "img/sin-imagen.svg";
        }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge etiqueta-categoria align-self-start mb-2">
          {juego.categoria}
        </span>
        <h3 className="card-title h5">{juego.nombre}</h3>
        <p className="card-text descripcion">{juego.descripcion}</p>
        <p className="precio mt-auto mb-0">
          ${Number(juego.precio).toLocaleString("es-CL")}
        </p>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm mt-3"
          onClick={confirmarEliminar}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default TarjetaJuego;
