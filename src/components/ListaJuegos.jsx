import TarjetaJuego from "./TarjetaJuego.jsx";

// recorre la lista de juegos y dibuja una tarjeta por cada uno
function ListaJuegos({ juegos, modoAdmin, onEliminar }) {
  if (juegos.length === 0) {
    return (
      <p className="text-center texto-suave py-5">
        No hay videojuegos en esta categoría por ahora.
      </p>
    );
  }

  return (
    <>
      <p className="texto-suave">
        Mostrando {juegos.length} {juegos.length === 1 ? "juego" : "juegos"}
      </p>

      <div className="grilla-juegos">
        {juegos.map((juego) => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            modoAdmin={modoAdmin}
            onEliminar={onEliminar}
          />
        ))}
      </div>
    </>
  );
}

export default ListaJuegos;
