import React from "react";

const Feature = () => (
  <section
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
      background: "linear-gradient(to bottom, #eaf3ff 0%, #eaf3ff 100%)" // unified background
    }}
  >
    {/* Background blobs */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
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
        height: "100%",
        marginTop: "10vh",
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
      {/* Pitch destacado con efecto visual */}
      <div
        style={{
          marginTop: "3.5rem",
          maxWidth: 700,
          position: "relative",
          display: "inline-block",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "110%",
            height: "120%",
            background: "linear-gradient(120deg, #2563eb55 0%, #60a5fa33 100%)",
            filter: "blur(32px)",
            borderRadius: "32px",
            zIndex: 0,
            opacity: 0.7,
            animation: "pitch-glow 3s ease-in-out infinite alternate"
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "2.5rem 2.5rem 2.5rem 2.5rem",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 8px 32px 0 rgba(37,99,235,0.10)",
            fontSize: "1.35rem",
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 500,
            color: "#1e293b",
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            textAlign: "center",
            backdropFilter: "blur(2px)",
          }}
        >
          <span style={{ fontWeight: 700, color: "#2563eb", fontSize: "1.15em" }}>Titan</span> is your destination for the best premium <b>drivers</b>, <b>irons</b>, and <b>fairway woods</b>.<br /><br />
          Discover the new <b>GT280</b>, <b>GT1</b>, and <b>GT Hybrids</b> lines, designed to maximize your performance on the course.<br /><br />
          <span style={{ color: "#2563eb", fontWeight: 700 }}>Professional quality</span>, innovation, and technology for every level.<br />
          <span style={{ fontWeight: 700, color: "#111" }}>Take your game to the next level with Titan!</span>
        </div>
      </div>
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
        @keyframes pitch-glow {
          0% { opacity: 0.7; filter: blur(32px);}
          100% { opacity: 1; filter: blur(48px);}
        }
      `}
    </style>
  </section>
);

export default Feature;