import * as React from "react";
import icon from "/public/static/banknote.svg";

const Features = () => {
  const feats = [
    { title: "firstItem", id: 1, imgSrc: icon },
    { title: "secondItem", id: 2, imgSrc: icon },
  ];

  return (
    <div className="featuresContainer py-8">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        Our main features
      </h1>

      <div className="featss">
        {feats.map((feat) => (
          <div className="parent">
            <img src={feat.imgSrc} />
            <h2>{feat.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
