import React from "react";

const Anuncio = () => (
  <section className="relative w-full min-h-[450px] flex items-center justify-center bg-black overflow-hidden">
    {/* Imagen de fondo expandida */}
    <img
      src="/assets/anuncio.png"
      alt="Anuncio Titan"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      draggable={false}
    />
    {/* Overlay oscuro para mejor lectura */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
    {/* Contenido centrado */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 w-full">
      <img
        src="/assets/titan-logo.png"
        alt="Titan Logo"
        className="h-20 mb-6 drop-shadow-lg"
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <span className="bg-white/90 text-black text-xs font-bold px-4 py-1 rounded-full mb-4 shadow-lg uppercase tracking-widest">Nuevo</span>
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">
        <span className="text-red-500">T</span>SERIES
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">NOW ON TOUR</h3>
      <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow-lg">
        Descubre los nuevos modelos de hierros T-Series, el resultado de años de colaboración entre el equipo de I+D de Titan y los profesionales del Tour.
      </p>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          letterSpacing: "0.05em"
        }}
      >
        Explorar
      </button>
    </div>
  </section>
);

export default Anuncio;