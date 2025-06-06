import React from "react";

const NewArticles = () => (
  <section
    style={{
      position: "relative",
      background: "linear-gradient(to bottom, #eaf3ff 0%, #eaf3ff 100%)", // unified background
      borderRadius: "16px",
      margin: "32px 0",
      padding: "32px 0",
      overflow: "hidden",
      minHeight: 600,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
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
      aria-hidden="true"
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
          filter: "blur(48px)",
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
          filter: "blur(32px)",
        }}
      ></div>
    </div>
    {/* Cards */}
    <div
      style={{
        display: "flex",
        gap: "24px",
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left big card */}
      <div
        style={{
          flex: 2,
          borderRadius: "16px",
          minHeight: 520,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "40px",
          color: "#fff",
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/driver.png"
          alt="GT280 Mini Driver"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            zIndex: 0,
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "#fff",
            color: "#444",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 8,
            padding: "4px 16px",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
            zIndex: 2,
          }}
        >
          New
        </span>
        <div style={{ maxWidth: 400, textAlign: "left", position: "relative", zIndex: 2 }}>
          <h2
            style={{
              fontFamily: "'Oswald', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "2.5rem",
              margin: 0,
              letterSpacing: "0.03em",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            GT280 MINI DRIVER
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              margin: "16px 0 32px 0",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Longer than a 3-wood yet easier to control than a driver, the GT280 is designed to distance yourself from the competition. Now available in golf shops worldwide.
          </p>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "24px",
              padding: "14px 36px",
              cursor: "pointer",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              transition: "background 0.2s",
            }}
          >
            Shop GT280
          </button>
        </div>
      </div>
      {/* Right two small cards */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Top small card */}
        <div
          style={{
            flex: 1,
            borderRadius: "16px",
            minHeight: 240,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            padding: "24px",
            color: "#fff",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/hibrido.png"
            alt="GT1 Metals"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "#fff",
              color: "#444",
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 8,
              padding: "4px 16px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
              zIndex: 2,
            }}
          >
            New
          </span>
          <div style={{ fontWeight: 700, fontSize: "1.5rem", textShadow: "0 2px 8px rgba(0,0,0,0.18)", position: "relative", zIndex: 2 }}>
            GT1 METALS
          </div>
          <div
            style={{
              position: "absolute",
              right: 24,
              bottom: 24,
              background: "#2563eb",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#fff",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            <span>&#8250;</span>
          </div>
        </div>
        {/* Bottom small card */}
        <div
          style={{
            flex: 1,
            borderRadius: "16px",
            minHeight: 240,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            padding: "24px",
            color: "#fff",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/hibrido3.png"
            alt="GT Hybrids"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "#fff",
              color: "#444",
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 8,
              padding: "4px 16px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
              zIndex: 2,
            }}
          >
            New
          </span>
          <div style={{ fontWeight: 700, fontSize: "1.5rem", textShadow: "0 2px 8px rgba(0,0,0,0.18)", position: "relative", zIndex: 2 }}>
            GT HYBRIDS
          </div>
          <div
            style={{
              position: "absolute",
              right: 24,
              bottom: 24,
              background: "#2563eb",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#fff",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            <span>&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewArticles;