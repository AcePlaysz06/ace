import React from "react";
import logo from "./AcePlaysz.png";

const Navbar = () => {
  return (
    <nav className="w-full h-full bg-gray-900/60 p-4 shadow-md flex justify-between items-center rounded-b-lg border-b border-blue-500">
      <p className="text-blue-400 text-xl font-bold">AcePlaysz</p>
      <img src={logo} className="h-12 w-auto" alt="logo" />
    </nav>
  );
};

export default Navbar;
