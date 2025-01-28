import React from "react";
import logo from "../../assets/logo.webp";

const Page2 = () => {
  return (
    <div
      className="h-full flex items-center justify-center text-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold p-6 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
        Indian Corn Supply Dynamics - 2024-25
      </h1>
    </div>
  );
};

export default Page2;
