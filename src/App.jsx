import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Filtros from "./components/Filtros.jsx";
import FormularioJuego from "./components/FormularioJuego.jsx";
import ListaJuegos from "./components/ListaJuegos.jsx";
import FormularioContacto from "./components/FormularioContacto.jsx";
import Footer from "./components/Footer.jsx";
import categorias from "./data/categorias.js";

function App() {

  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // categoría elegida en los filtros ("Todos" muestra todo)
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // si está activado se ve el formulario de agregar y los botones de eliminar
  const [modoAdmin, setModoAdmin] = useState(false);

  // cuando carga la página se leen los juegos del archivo json
  useEffect(() => {
    async function cargarJuegos() {
      try {
        const respuesta = await fetch("juegos.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo leer juegos.json");
        }

        const datos = await respuesta.json();
        setJuegos(datos);
      } catch (e) {
        console.error(e);
        setError("No pudimos cargar los videojuegos. Intenta recargar la página.");
      } finally {
        setCargando(false);
      }
    }

    cargarJuegos();
  }, []);

  function agregarJuego(juegoNuevo) {
    setJuegos([juegoNuevo, ...juegos]);
    setCategoriaActiva("Todos");
  }

  function eliminarJuego(id) {
    setJuegos(juegos.filter((juego) => juego.id !== id));
  }

  // juegos que se muestran según el filtro elegido
  const juegosFiltrados =
    categoriaActiva === "Todos"
      ? juegos
      : juegos.filter((juego) => juego.categoria === categoriaActiva);

  return (
    <>
      <header className="sticky-top">
        <Navbar />
      </header>

      <main>
        <Hero />

        <section id="catalogo" className="container seccion">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <h2 className="titulo-seccion mb-0">Catálogo</h2>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchAdmin"
                checked={modoAdmin}
                onChange={() => setModoAdmin(!modoAdmin)}
              />
              <label className="form-check-label" htmlFor="switchAdmin">
                Modo administrador
              </label>
            </div>
          </div>

          <Filtros
            categorias={categorias}
            categoriaActiva={categoriaActiva}
            onCambiar={setCategoriaActiva}
          />

          {modoAdmin && (
            <FormularioJuego categorias={categorias} onAgregar={agregarJuego} />
          )}

          {cargando && (
            <div className="text-center py-5">
              <div className="spinner-border" role="status"></div>
              <p className="texto-suave mt-3">Cargando videojuegos...</p>
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {!cargando && !error && (
            <ListaJuegos
              juegos={juegosFiltrados}
              modoAdmin={modoAdmin}
              onEliminar={eliminarJuego}
            />
          )}
        </section>

        <section id="contacto" className="container seccion">
          <FormularioContacto />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
