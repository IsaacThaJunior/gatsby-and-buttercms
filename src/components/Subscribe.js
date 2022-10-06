import * as React from "react";
import { Link } from "gatsby";

const Subscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <h1 className="text-4xl text-gray-600 uppercase font-bold mb-8 text-center">
        Subscribe to our newsletter
      </h1>
      <p className="text-lg italic text-center mt-3">
        Get the latest news and updates from us
      </p>
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row">
        <input
          className="border-2 border-green-600 rounded-md p-3 w-96 mb-8 md:mb-0 md:mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-green-500 text-white rounded-md p-2 w-40 md:w-32 m-auto">
          Subscribe
        </button>
      </div>

      <div className="m-12">
        <h2 className="text-2xl text-slate-800">
          Want to know more about us?
          <a
            className="text-base ml-2 italic underline text-zinc-700"
            href="../pages/about.js"
          >
            Click here
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Subscribe;
