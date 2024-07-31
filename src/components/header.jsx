import React from "react";
import logo from "../assets/images/logo.webp";

function Header() {
  return (
    <header className="bg-slate-500 flex justify-between items-center">
      <img className="m-2 w-15 h-20" src={logo} />
      <div className="justify-center flex-1 flex">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          Act Now for a Sustainable Future
        </h1>
      </div>
    </header>
  );
}

export default Header;
