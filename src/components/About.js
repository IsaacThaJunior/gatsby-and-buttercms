import * as React from "react";
import image from "../images/coding.jpeg";
import { Link } from "gatsby";

const About = () => {
  return (
    <div className="flex justify-center items-center md:mx-10 lg:mx-48 xl:m-auto xl:h-full">
      <div className="container flex bg-red-200 flex-col xl:flex-row-reverse ">
        <div className="rightSide bg-neutral-500 xl:w-1/2">
          <img className="w-full h-full" src={image} alt="coders" />
        </div>
        <div className="leftSide bg-green-200 xl:w-1/2 py-16 px-16 xl:py-8 2xl:py-16 text-center">
          <h1 className="text-3xl text-emerald-500 font-bold mb-8">
            Built for Techies by Techies
          </h1>
          <p className="text-slate-800 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            porro tenetur culpa quaerat temporibus laudantium eum obcaecati!
            Excepturi cupiditate accusamus quas. Natus eos et quis eveniet
            corporis, repellendus consequuntur alias dolores, consequatur
            provident enim eius quos, magni excepturi dolor voluptatibus cumque
            tenetur placeat illum? Quae impedit dolorem facere dolor
            reprehenderit.
          </p>
          <p className="text-slate-800 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            porro tenetur culpa quaerat temporibus laudantium eum obcaecati!
            Excepturi cupiditate accusamus quas. Natus eos et quis eveniet
            corporis, repellendus consequuntur alias dolores, consequatur
            provident enim eius quos, magni excepturi dolor voluptatibus cumque
            tenetur placeat illum? Quae impedit dolorem facere dolor
            reprehenderit.
          </p>
          <button className="bg-green-600 text-white rounded-md p-3 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
            <Link to="#">
              Join us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
