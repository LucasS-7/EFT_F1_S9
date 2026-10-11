import { useState } from "react";

const datosVacios = {
  nombre: "",
  email: "",
  mensaje: "",
};

// formulario de contacto, revisa los campos antes de "enviar"
function FormularioContacto() {
  const [datos, setDatos] = useState(datosVacios);
  const [errores, setErrores] = useState({});
  const [nombreEnviado, setNombreEnviado] = useState("");

  // sirve para los 3 campos porque cada input tiene su "name"
  function manejarCambio(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    setNombreEnviado("");
  }

  // devuelve un objeto con un mensaje por cada campo que esté mal
  function validar() {
    const nuevosErrores = {};

    if (datos.nombre.trim().length < 3) {
      nuevosErrores.nombre = "Escribe tu nombre (mínimo 3 letras).";
    }
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (datos.email.trim() === "") {
      nuevosErrores.email = "El correo es obligatorio.";
    } else if (!formatoEmail.test(datos.email.trim())) {
      nuevosErrores.email = "El correo no es válido, por ejemplo: nombre@correo.com";
    }

    if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nuevosErrores;
  }

  function manejarEnvio(e) {
    e.preventDefault();

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    // si hay algún error no se envía nada
    if (Object.keys(nuevosErrores).length > 0) {
      setNombreEnviado("");
      return;
    }

    // no hay servidor, así que el envío es solo simulado
    setNombreEnviado(datos.nombre.trim());
    setDatos(datosVacios);
  }

  const hayErrores = Object.keys(errores).length > 0;

  return (
    <>
      <h2 className="titulo-seccion mb-3">Contacto</h2>
      <p className="texto-suave mb-4">
        ¿Dudas con un juego o quieres que agreguemos uno al catálogo? Escríbele
        al administrador del sitio.
      </p>

      <form
        className="caja-formulario formulario-contacto"
        onSubmit={manejarEnvio}
        noValidate
      >
        {hayErrores && (
          <div className="alert alert-danger" role="alert">
            Revisa los campos marcados en rojo antes de enviar.
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="contacto-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="contacto-nombre"
            name="nombre"
            className={"form-control" + (errores.nombre ? " is-invalid" : "")}
            placeholder="Tu nombre"
            value={datos.nombre}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.nombre}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="contacto-email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="contacto-email"
            name="email"
            className={"form-control" + (errores.email ? " is-invalid" : "")}
            placeholder="nombre@correo.com"
            value={datos.email}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.email}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="contacto-mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            id="contacto-mensaje"
            name="mensaje"
            rows="4"
            className={"form-control" + (errores.mensaje ? " is-invalid" : "")}
            placeholder="Cuéntanos en qué te podemos ayudar"
            value={datos.mensaje}
            onChange={manejarCambio}
          ></textarea>
          <div className="invalid-feedback">{errores.mensaje}</div>
        </div>

        <button type="submit" className="btn btn-boton-principal">
          Enviar mensaje
        </button>

        {nombreEnviado && (
          <div className="alert alert-success mt-3 mb-0" role="alert">
            ¡Gracias, {nombreEnviado}! Tu mensaje fue enviado.
          </div>
        )}
      </form>
    </>
  );
}

export default FormularioContacto;
