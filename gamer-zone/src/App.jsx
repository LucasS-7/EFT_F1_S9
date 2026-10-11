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
  // lista de juegos, se llena con lo que viene de juegos.json
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // categoría elegida en los filtros ("Todos" muestra todo)
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

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
    // el nuevo va primero y se saca el filtro para que se vea altiro
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
          <h2 className="titulo-seccion mb-4">Catálogo</h2>

          <Filtros
            categorias={categorias}
            categoriaActiva={categoriaActiva}
            onCambiar={setCategoriaActiva}
          />

          <FormularioJuego categorias={categorias} onAgregar={agregarJuego} />

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
            <ListaJuegos juegos={juegosFiltrados} onEliminar={eliminarJuego} />
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
