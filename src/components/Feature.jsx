import React from "react";

const Feature = () => (
  <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden">
    {/* Efecto visual: círculos de fondo */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
    </div>
    <h1 className="relative text-5xl md:text-7xl font-extrabold text-blue-900 drop-shadow-lg animate-fade-in-down">
      WELCOME TO <span className="text-blue-600 animate-pulse">TITAN</span>
    </h1>
    <p className="relative mt-8 text-xl md:text-2xl text-blue-800 font-medium animate-fade-in-up">
      <span className="bg-white/70 px-4 py-2 rounded-xl shadow-md backdrop-blur-sm">
        Every great swing starts with Titan
      </span>
    </p>
    {/* Animaciones personalizadas */}
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