import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <div className="navigationPanel flex bg-zinc-800 justify-between px-4 pr-1 py-2 items-center text-white sm:pr-5">
      <h1 className="text-3xl italic text-green-400">KenIs Technologies</h1>
      <nav className="lg:w-1/4 hidden md:block md:w-1/3">
        <ul className="flex justify-between px-5">
          <li className="hover:underline hover:scale-105 transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button className="shopNowButton text-white bg-emerald-500 py-3 px-2 rounded-2xl text-lg md:bg-green-400 md:text-black hover:scale-105 transition-all duration-300">
        Shop Now
      </button>
    </div>
  );
};

export default Navigation;
