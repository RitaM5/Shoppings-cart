import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 3,
        way:"/",
        link: "Home",
      },
      {
        id: 4,
        way:"/",
        link: "shop",
      }
    ];
    return (
        <div className="lg:px-28 flex justify-between items-center w-full h-20  text-white bg-black fixed z-10">
        <div>
          <h1 className="text-4xl font-bangers ml-2 text-cyan-400">Shopping<span className="text-white">Cart</span></h1>
        </div>
  
        <ul className="hidden md:flex">
       
          {links.map(({ id, link, way }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to='/' smooth duration={500}>
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
         
            {links.map(({ id, link, way }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} to='/' smooth duration={500}>
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