import React from "react";

function NavigationBar() {
  return (
    <nav className=" bg-green-300 p-4">
      <div className=" container mx-auto flex list-none justify-between items-center text-sm md:text-xl">
        <a
          href="https://www.sustain.ucla.edu/what-is-sustainability/#:~:text=The%20most%20often%20quoted%20definition,to%20meet%20their%20own%20needs.%E2%80%9D"
          className="hover:text-blue-500"
        >
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Initiatives
        </a>
        <a href="#" className="hover:text-blue-500">
          Resources
        </a>
        <a href="#" className="hover:text-blue-500">
          Get Involved
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
