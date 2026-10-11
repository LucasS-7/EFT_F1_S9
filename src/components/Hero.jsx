//(sección de inicio)
function Hero() {
  return (
    <section id="inicio" className="hero text-center">
      <div className="container">
        <h1 className="hero-titulo">Gamer Zone</h1>
        <p className="lead hero-texto">
          Aquí encontrarás videojuegos de todos los tiempos, gustos y para
          todas las edades.
        </p>
        <a href="#catalogo" className="btn btn-boton-principal btn-lg">
          Ver catálogo
        </a>
      </div>
    </section>
  );
}

export default Hero;
