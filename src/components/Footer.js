import * as React from "react";

const Footer = () => {
  return (
    <footer className=" bg-slate-800 text-white flex flex-col justify-center items-center py-10">
      <h3 className="text-xl">
        &copy; Copyright <a href="http://github.com/kenebebh">Kene</a> and Isaac
        <span className="text-sm"> 2022</span>
      </h3>
      <p className="text-lg italic">All rights reserved</p>
    </footer>
  );
};

export default Footer;
