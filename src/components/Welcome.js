import * as React from "react";

const Welcome = () => {
  return (
    <div className="welcomePanel flex flex-col justify-center items-center bg-slate-800 h-2/3 text-white">
      <h2 className="text-2xl mb-5">Welcome to KenIs technologies</h2>
      <p className="text-xl w-1/2 text-center mb-4">
        We are a software development company, that deal in all kind of tech
        gadgets, from LED monitors to customizable photochromic lens to protect
        your eyes during screentime
      </p>

      <p className="text-xl w-1/2 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        assumenda aliquid magni laudantium consectetur ut eius tenetur sequi
        velit voluptate!
      </p>

      <div className="flex pt-8">
        <button className="bg-amber-500 py-3 px-2 rounded-xl text-black mr-5 text-lg hover:text-red">
          Shop Now
        </button>

        <button className="bg-amber-500 py-3 px-2 rounded-xl text-black text-lg">
          Dream it
        </button>
      </div>
    </div>
  );
};

export default Welcome;
