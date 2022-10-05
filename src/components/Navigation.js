import * as React from "react";

const Navigation = () => {
  return (
    <div className="navigationPanel flex bg-amber-500 justify-between px-3 pr-1 py-2 items-center text-white">
      <h1 className="text-3xl">KenIs Technologies</h1>
      <nav className="w-1/2">
        <ul className="flex justify-between px-5">
          <li className="hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline">
            <a href="/about">About</a>
          </li>
          <li className="hover:underline">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="shopNowButton bg-green-600 py-3 px-2 rounded-2xl text-black text-lg">
        Shop Now
      </button>
    </div>
  );
};

export default Navigation;
