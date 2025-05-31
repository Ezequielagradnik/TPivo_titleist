import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        background: "#1a202c",
        color: "#fff",
        padding: "3rem 0",
        marginTop: "auto"
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: 0 }}>
          <img
            src="/assets/titan-logo.png"
            alt="Titan Logo"
            style={{
              height: 100,
              width: "auto",
              filter: "brightness(0) invert(1)"
            }}
          />
          <span style={{ fontSize: "1.125rem", fontWeight: "bold", letterSpacing: "0.05em" }}></span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="#"
            aria-label="Facebook"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#60a5fa")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            <Facebook size={28} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ec4899")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            <Instagram size={28} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#38bdf8")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            <Twitter size={28} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            style={{ color: "#fff", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#fff")}
          >
            <Youtube size={28} />
          </a>
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#a0aec0",
          fontSize: "0.95rem"
        }}
      >
        &copy; {new Date().getFullYear()} TITAN Golf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;