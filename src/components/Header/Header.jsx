import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "services",
      },
      {
        id: 3,
        link: "about",
      },
      {
        id: 4,
        link: "projects",
      },
      {
        id: 5,
        link: "skills",
      },
      {
        id: 6,
        link: "contact",
      },
    ];
    return (
        <div className="lg:px-28 flex justify-between items-center w-full h-20  text-white bg-black fixed z-10">
        <div>
          <h1 className="text-4xl font-bangers ml-2 ">Rita <span className="text-cyan-300">Moni</span></h1>
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
  
        {nav && (
          <ul className="flex flex-col justify-center items-center py-4 absolute top-0 left-0 w-full bg-gradient-to-b from-black via-black to-gray-900 text-gray-300">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default Header;