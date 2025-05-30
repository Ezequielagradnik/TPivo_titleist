import React from "react";

const Feature = () => (
  <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
    </div>
{/* Content */}
<div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
  <h1
    className="font-oswald font-extrabold text-black drop-shadow-xl animate-fade-in-down text-center"
    style={{
      fontFamily: "'Oswald', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "8vw",
      lineHeight: 1,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }}
  >
    WELCOME TO <span className="text-blue-600 animate-pulse">TITAN</span>
  </h1>
  <p
    className="mt-10 text-black font-oswald font-bold animate-fade-in-up text-center"
    style={{
      fontFamily: "'Oswald', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "2.5vw",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    }}
  >
    Every great swing starts with Titan
  </p>
</div>
    {/* Animations */}
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
        .animate-fade-in-down {
          animation: fade-in-down 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}
    </style>
  </section>
);

export default Feature;