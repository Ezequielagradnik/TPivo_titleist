import React from "react";

const Anuncio = () => (
  <section
    style={{
      position: "relative",
      width: "100%",
      height: "80vh",
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
          height: 200,
            width: "auto",
          marginBottom: 24,
          filter: "brightness(0) invert(1)",
        }}
      />
     
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 8,
          letterSpacing: "0.04em",
          textShadow: "0 2px 8px rgb(242, 235, 235)"
        }}
      >
        <span style={{ color: "#2563eb" }}>T</span>SERIES
      </h2>
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
          e.currentTarget.style.background = "#1d59de";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "#2563eb";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Explorar
      </button>
    </div>
  </section>
);

export default Anuncio;