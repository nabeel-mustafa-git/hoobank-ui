import React, { useState } from "react";

import { logo, close, menu } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img className="w-[124px]" src={logo} alt="hoobank"></img>
      <ul
        className={`${
          toggle === false
            ? "sm:flex hidden"
            : "max-sm:absolute max-sm:top-20 max-sm:right-8 max-sm:bg-slate-800 max-sm:p-5 max-sm:leading-10 max-sm:rounded-lg"
        } sm:justify-end sm:items-center sm:flex sm:flex-1 list-none`}
      >
        {navLinks.map((nav, index) => (
          <li key={index} className={`poppins-el text-[16px]  text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-purple-400`}>
            <a href={nav.href}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
