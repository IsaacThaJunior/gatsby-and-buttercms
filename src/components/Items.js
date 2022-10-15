import * as React from "react";
import pic1 from "../images/gadget1.jpeg";
import pic2 from "../images/gadget2.jpeg";
import pic3 from "../images/gadget3.jpeg";
import pic4 from "../images/gadget4.jpeg";
import pic5 from "../images/gadget5.jpeg";
import pic6 from "../images/gadget6.jpeg";

const Items = () => {
  const blogs = [
    {
      title: "Smartphones",
      body: "Lorem ipsum...",
      author: "Kene",
      id: 1,
      imgSrc: pic1,
    },
    {
      title: "Rock your World!",
      body: "Lorem ipsum...",
      author: "Isaac",
      id: 2,
      imgSrc: pic2,
    },
    {
      title: "Laptops",
      body: "Lorem ipsum...",
      author: "Kene",
      id: 3,
      imgSrc: pic3,
    },
    {
      title: "Hard drives and hard disks",
      body: "Lorem ipsum...",
      author: "Kene",
      id: 4,
      imgSrc: pic4,
    },
    {
      title: "Game dev tools",
      body: "Lorem ipsum...",
      author: "Kene",
      id: 5,
      imgSrc: pic5,
    },
    {
      title: "Macbooks",
      body: "Lorem ipsum...",
      author: "Kene",
      id: 6,
      imgSrc: pic6,
    },
  ];

  return (
    <div className="flex px-8 bg-amber-50 py-24 flex-col">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        Our products
      </h1>

      <div className="items-container w-full flex flex-wrap justify-center lg:w-full xl:w-3/4 xl:m-auto">
        {blogs.map((blog) => (
          <div
            className="px-1 bg-amber-100 m-5 pt-5 pb-10 w-96 flex flex-col items-center rounded-md hover:bg-yellow-100 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
            key={blog.id}
          >
            <img className="self-stretch" src={blog.imgSrc} alt='' />
            <h2 className="text-xl text-green-600 uppercase m-2 font-bold">
              {blog.title}
            </h2>
            <p className="text-lg italic">Written by {blog.author} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
