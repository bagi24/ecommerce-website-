import React from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '/#',
  },
  {
    id: 3,
    name: 'Mens Wear',
    link: '/#',
  },
  {
    id: 3,
    name: 'Electronics',
    link: '/#',
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="relative z-40 bg-white shadow-md duration-200 dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="focus:border-1 w-[200px] rounded-full border border-gray-300 px-2 py-1 transition-all duration-300 focus:border-primary focus:outline-none group-hover:w-[300px] dark:border-gray-500 dark:bg-gray-800 sm:w-[200px]  "
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r  from-primary to-secondary px-4 py-1 text-white transition-all duration-200"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="cursor-pointer text-xl text-white drop-shadow-sm" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* bellow Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="hidden items-center gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
