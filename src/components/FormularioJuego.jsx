import { useState } from "react";

const datosVacios = {
  nombre: "",
  categoria: "",
  precio: "",
  imagen: "",
  descripcion: "",
};

// formulario para agregar un videojuego nuevo (solo aparece en modo administrador)
function FormularioJuego({ categorias, onAgregar }) {
  const [datos, setDatos] = useState(datosVacios);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  function manejarCambio(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    setMensaje("");
  }

  function validar() {
    const nuevosErrores = {};

    if (datos.nombre.trim().length < 2) {
      nuevosErrores.nombre = "El nombre debe tener al menos 2 caracteres.";
    }

    if (datos.categoria === "") {
      nuevosErrores.categoria = "Elige una categoría.";
    }

    const precio = Number(datos.precio);
    if (datos.precio === "" || !Number.isInteger(precio) || precio <= 0) {
      nuevosErrores.precio = "Ingresa un precio entero mayor a 0.";
    }

    if (datos.descripcion.trim().length < 10) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 10 caracteres.";
    }

    return nuevosErrores;
  }

  function manejarEnvio(e) {
    e.preventDefault();

    const nuevosErrores = validar();
    setErrores(nuevosErrores);
    setMensaje("");

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    const juegoNuevo = {
      id: Date.now(), // un número que no se repite, sirve como id
      nombre: datos.nombre.trim(),
      categoria: datos.categoria,
      precio: Number(datos.precio),
      descripcion: datos.descripcion.trim(),
      // si no escribió imagen se usa la de por defecto
      imagen: datos.imagen.trim() === "" ? "img/sin-imagen.svg" : datos.imagen.trim(),
    };

    // le paso el juego a App, que es quien guarda la lista
    onAgregar(juegoNuevo);
    setDatos(datosVacios);
    setMensaje("Videojuego agregado al catálogo.");
  }

  return (
    <form className="caja-formulario mb-4" onSubmit={manejarEnvio} noValidate>
      <h3 className="h5 mb-3">Agregar videojuego</h3>

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="juego-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="juego-nombre"
            name="nombre"
            className={"form-control" + (errores.nombre ? " is-invalid" : "")}
            value={datos.nombre}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.nombre}</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="juego-categoria" className="form-label">
            Categoría
          </label>
          <select
            id="juego-categoria"
            name="categoria"
            className={"form-select" + (errores.categoria ? " is-invalid" : "")}
            value={datos.categoria}
            onChange={manejarCambio}
          >
            <option value="">Elige una</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errores.categoria}</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="juego-precio" className="form-label">
            Precio (CLP)
          </label>
          <input
            type="number"
            id="juego-precio"
            name="precio"
            min="1"
            step="1"
            className={"form-control" + (errores.precio ? " is-invalid" : "")}
            value={datos.precio}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.precio}</div>
        </div>

        <div className="col-12">
          <label htmlFor="juego-imagen" className="form-label">
            Imagen (opcional)
          </label>
          <input
            type="text"
            id="juego-imagen"
            name="imagen"
            className="form-control"
            placeholder="img/mi-juego.jpg o un link de internet"
            value={datos.imagen}
            onChange={manejarCambio}
          />
        </div>

        <div className="col-12">
          <label htmlFor="juego-descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            id="juego-descripcion"
            name="descripcion"
            rows="3"
            className={"form-control" + (errores.descripcion ? " is-invalid" : "")}
            value={datos.descripcion}
            onChange={manejarCambio}
          ></textarea>
          <div className="invalid-feedback">{errores.descripcion}</div>
        </div>
      </div>

      <button type="submit" className="btn btn-boton-principal mt-3">
        Agregar al catálogo
      </button>

      {mensaje && (
        <div className="alert alert-success mt-3 mb-0" role="alert">
          {mensaje}
        </div>
      )}
    </form>
  );
}

export default FormularioJuego;
