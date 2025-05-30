import React from 'react';


const navLinks = [
  "Balls", "Clubs", "Gear", "Tour", "Fitting", "Videos", "Women"
];

const Header = () => (
  <header
    style={{
      background: "rgba(255,255,255,0.95)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid #e5e7eb"
    }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0.5rem 2rem"
      }}
    >
      <img
        src="/assets/titan-logo.png"
        alt="Titan Logo"
        style={{
          height: 100,
          transition: "transform 0.2s",
          cursor: "pointer",
          marginTop: "20px"
        }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
      />
      <nav>
        <ul style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}>
          {navLinks.map(link => (
            <li key={link}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#1a222c",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  transition: "background 0.2s, color 0.2s"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#1a222c";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a222c";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;