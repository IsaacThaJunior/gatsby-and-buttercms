import * as React from "react";
import pic1 from "../images/gadget1.jpeg";
import pic2 from "../images/gadget5.jpeg";
import pic3 from "../images/gadget6.jpeg";

const URL = `https://api.buttercms.com/v2/content/features_collections?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Extra = () => {
  const offers = [
    {
      title: "Software engineering internships",
      body: "We offer Internships to students who are registered with us and complete our training programme and pass with flying colours",
      id: 1,
      imgSrc: pic1,
    },
    {
      title: "Mentorship programmes",
      body: "As a techie, you may often be confused, need some profesional guidance or perhaps someone to teach you about the real-world dev life. Enroll in our mentorship programme today!",
      id: 2,
      imgSrc: pic2,
    },
    {
      title: "Councelling",
      body: "We offer career and mental to anyone who needs it for no cost at all. E no easy to live for Naija, and we understand. Book a councelling session now!",
      author: "Kene",
      id: 3,
      imgSrc: pic3,
    },
  ];

  return (
    <div className="flex px-8 bg-amber-50 py-24 flex-col">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        More from us
      </h1>

      <div className="items-container w-full flex flex-wrap justify-center">
        {offers.map((offer) => (
          <div
            className="px-0 bg-amber-100 m-5 pt-0 pb-10 w-96 flex flex-col items-center rounded-lg overflow-hidden hover:bg-amber-200 hover:-translate-y-1 transition-all duration-300"
            key={offer.id}
          >
            <img className="self-stretch" src={offer.imgSrc} alt='' />
            <h2 className="text-xl text-green-600 uppercase m-2 font-bold text-center">
              {offer.title}
            </h2>
            <p className="text-lg italic px-3 text-center mt-3">
              {offer.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
