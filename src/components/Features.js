import * as React from "react";
import icon from "../images/banknote.svg";

const Features = () => {
  const feats = [
    {
      id: 1,
      imgSrc: icon,
      description: "Multiple Payment Options",
    },
    {
      id: 2,
      imgSrc: icon,
      description: "24/7 Customer Service",
    },
    {
      id: 3,
      imgSrc: icon,
      description: "Extensive product Information",
    },
    {
      id: 4,
      imgSrc: icon,
      description: "User reviews on all our products",
    },
    { id: 5, imgSrc: icon, description: "Secure Details" },
    {
      id: 6,
      imgSrc: icon,
      description: "Product filtering and sorting",
    },
  ];

  return (
    <div className="py-24">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        Our main features
      </h1>

      <div className="w-full flex flex-wrap justify-center">
        {feats.map((feat) => (
          <div className="px-1 bg-amber-50 m-5 mb-8 pt-5 pb-10 w-96 flex flex-col items-center rounded-md hover:bg-amber-100 hover:-translate-y-1 transition-all duration-300">
            <img className="mb-5" src={feat.imgSrc} />
            <h2 className="text-lg italic">{feat.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
