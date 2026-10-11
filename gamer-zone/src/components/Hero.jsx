// parte de arriba de la página (sección de inicio)
function Hero() {
  return (
    <section id="inicio" className="hero text-center">
      <div className="container">
        <h1 className="hero-titulo">Gamer Zone</h1>
        <p className="lead hero-texto">
          Videojuegos para todos los gustos: desde mundos abiertos gigantes
          hasta indies chicos que se roban tus tardes.
        </p>
        <a href="#catalogo" className="btn btn-boton-principal btn-lg">
          Ver catálogo
        </a>
      </div>
    </section>
  );
}

export default Hero;
