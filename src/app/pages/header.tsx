"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMail, FiPhone } from 'react-icons/fi';
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showIcons] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Services",
    },
    {
      id: 4,
      link: "Works",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white nav z-50">
      <div className="text-5xl font-signature ml-2">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setNav(!nav)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      <ul className={`md:flex border border-black p-3 fixed ml-[35%] z-50 bg-white rounded-full ${nav ? 'block' : 'hidden'}`} style={{ backdropFilter: 'blur(10px)' }}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <ul className={`hidden md:flex space-x-4 text-black mr-7 ${showIcons ? 'block' : 'hidden'}`}>
        <li>
          <a href="https://www.instagram.com/mentarro/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="w-6 h-6 text-pink-600 hover:scale-105 duration-200" />
          </a>
        </li>
        <li>
          <a href="mailto:mentarro.in@gmail.com">
            <FiMail className="w-6 h-6 text-amber-800 hover:scale-105 duration-200" />
          </a>
        </li>
        <li>
          <a href="tel:+919894404496">
            <FiPhone className="w-6 h-6 text-green-500 hover:scale-105 duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mentarro/">
            <AiFillLinkedin className="w-6 h-6 text-blue-600 hover:scale-105 duration-200" />
          </a>
        </li>
      </ul>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
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

