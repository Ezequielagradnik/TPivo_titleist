import React from "react";

const Anuncio = () => (
  <section
    style={{
      position: "relative",
      width: "100%",
      minHeight: 450,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      overflow: "hidden"
    }}
  >
    {/* Imagen de fondo expandida */}
    <img
      src="/assets/anuncio.png"
      alt="Anuncio Titan"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        opacity: 0.8,
        zIndex: 1,
        userSelect: "none",
        pointerEvents: "none"
      }}
      draggable={false}
    />
    {/* Overlay oscuro para mejor lectura */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
        zIndex: 2
      }}
    ></div>
    {/* Contenido centrado */}
    <div
      style={{
        position: "relative",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5rem 1rem",
        width: "100%"
      }}
    >
      <img
        src="/assets/titan-logo.png"
        alt="Titan Logo"
        style={{
          height: 80,
          marginBottom: 24,
          filter: "brightness(0) invert(1)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      />
      <span
        style={{
          background: "rgba(255,255,255,0.9)",
          color: "#111",
          fontSize: 13,
          fontWeight: "bold",
          padding: "4px 16px",
          borderRadius: 999,
          marginBottom: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          textTransform: "uppercase",
          letterSpacing: "0.15em"
        }}
      >
        Nuevo
      </span>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 8,
          letterSpacing: "0.04em",
          textShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        <span style={{ color: "#ef4444" }}>T</span>SERIES
      </h2>
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 16,
          textShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        NOW ON TOUR
      </h3>
      <p
        style={{
          color: "#fff",
          fontSize: 20,
          maxWidth: 600,
          marginBottom: 32,
          textShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        Descubre los nuevos modelos de hierros T-Series, el resultado de años de colaboración entre el equipo de I+D de Titan y los profesionales del Tour.
      </p>
      <button
        style={{
          background: "#dc2626",
          color: "#fff",
          fontWeight: "bold",
          padding: "16px 40px",
          borderRadius: 999,
          fontSize: 20,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          letterSpacing: "0.05em",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "#b91c1c";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "#dc2626";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Explorar
      </button>
    </div>
  </section>
);

export default Anuncio;