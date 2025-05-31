import React from "react";

const Feature = () => (
  <section
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
      background: "linear-gradient(to bottom, #fff, #f0f6ff 50%, #dbeafe 100%)"
    }}
  >
    {/* Background blobs */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "#bfdbfe",
          opacity: 0.3,
          borderRadius: "50%",
          filter: "blur(48px)"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 384,
          height: 384,
          background: "#60a5fa",
          opacity: 0.2,
          borderRadius: "50%",
          filter: "blur(32px)"
        }}
      ></div>
    </div>
    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <h1
        style={{
          fontFamily: "'Oswald', Arial, sans-serif",
          fontWeight: 700,
          fontSize: "4vw",
          lineHeight: 1,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "#111",
          textShadow: "0 2px 8px rgba(0,0,0,0.07)",
          margin: 0,
          animation: "fade-in-down 1s cubic-bezier(.4,0,.2,1) both"
        }}
      >
        WELCOME TO{" "}
        <span
          style={{
            color: "#2563eb",
            position: "relative",
            overflow: "hidden",
            animation: "pulse 2s infinite"
          }}
          className="shine-effect"
        >
          TITAN
        </span>
      </h1>
      <p
        style={{
          marginTop: "2rem",
          color: "#111",
          fontFamily: "'Oswald', Arial, sans-serif",
          fontWeight: 700,
          fontSize: "1.2vw",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          animation: "fade-in-up 1.2s cubic-bezier(.4,0,.2,1) both"
        }}
      >
        Every great swing starts with Titan
      </p>
    </div>
    <style>
      {`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.1) 100%);
          transform: skewX(-20deg);
          animation: shine 2.5s infinite;
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}
    </style>
  </section>
);

export default Feature;