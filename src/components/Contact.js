import * as React from "react";
import locationIcon from "../images/location-pin.svg";
import phoneIcon from "../images/phone.svg";
import emailIcon from "../images/envelop.svg";
import faxIcon from "../images/old-phone.svg";

const Contact = () => {
  return (
    // <div className="flex px-8 py-24 flex-col relative">
    //   <div className="mainPage bg-amber-100 shadow-lg py-12 flex flex-col items-center absolute left-1/4 w-1/2">
    //     <div className="heading">
    //       <h1 className="text-3xl text-blue-300 font-bold tracking-wide">
    //         Get in touch
    //       </h1>
    //       <p className="font-bold text-blue-400 mb-3 italic">
    //         Feel free to contact us
    //       </p>
    //     </div>
    //     <div className="contactForm w-1/2">
    //       <form className="flex flex-col">
    //         <input
    //           className="mb-3 p-3"
    //           type="text"
    //           name=""
    //           required="required"
    //           placeholder="Your name here"
    //         />
    //         <input
    //           className="mb-3 p-3"
    //           type="email"
    //           name="email"
    //           id="email"
    //           placeholder="Email"
    //         />
    //         <textarea
    //           className="h-40 p-3 mb-12"
    //           name="info"
    //           id=""
    //           cols="30"
    //           rows="10"
    //           placeholder="What do you want us to know?"
    //         ></textarea>
    //         <button className="bg-cyan-600 text-white rounded-md p-3 hover:-translate-y-1 transition-all duration-300 w-1/2 m-auto">
    //           Send
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="detailsContainer bg-red-600 absolute top-3/4 left-72 py-12 pt-8 px-4 pl-6 text-white w-96 rounded-sm">
    //     <h1 className="font-bold text-2xl mb-6">Contact Us</h1>
    //     <div className="details">
    //       <ul>
    //         <li className="flex items-start mb-6">
    //           <img className="mr-2" src={locationIcon} alt="location" />
    //           <p>
    //             Isaac's house, Bema Gradens, First Mechanic Road, Alakahia,
    //             Choba, Port-Harcourt
    //           </p>
    //         </li>
    //         <li className="flex mb-6">
    //           <img className="mr-2" src={emailIcon} alt="email" />
    //           <p>Kenebebhwork@email.com</p>
    //         </li>
    //         <li className="flex mb-6">
    //           <img className="mr-2" src={phoneIcon} alt="phone" />
    //           <p>09069312305</p>
    //         </li>
    //         <li className="flex mb-6">
    //           <img className="mr-2" src={faxIcon} alt="fax" />
    //           <p>+3356 1589 2100</p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="flex py-24 flex-col relative">
      <div className="mainPage bg-amber-100 shadow-lg py-12 flex flex-col items-center mb-8 md:w-3/4 md:m-auto md:mb-24 xl:absolute xl:left-1/4 xl:w-2/3 2xl:w-1/2">
        <div className="heading">
          <h1 className="text-3xl text-blue-300 font-bold tracking-wide">
            Get in touch
          </h1>
          <p className="font-bold text-blue-400 mb-8 italic">
            Feel free to contact us
          </p>
        </div>
        <div className="contactForm">
          <form className="flex flex-col">
            <input
              className="mb-3 p-3"
              type="text"
              name=""
              required="required"
              placeholder="Your name here"
            />
            <input
              className="mb-3 p-3"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="h-40 p-3 mb-12"
              name="info"
              id=""
              cols="30"
              rows="10"
              placeholder="What do you want us to know?"
            ></textarea>
            <button className="bg-cyan-600 text-white rounded-md p-3 hover:-translate-y-1 transition-all duration-300 w-1/2 m-auto">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="detailsContainer bg-zinc-800 py-12 pt-8 px-4 pl-6 text-white rounded-sm w-full md:w-full xl:absolute xl:top-3/4 xl:left-32 xl:w-96 xl:rounded-md xl:mt-8 xl:py-12 2xl:left-72">
        <h1 className="font-bold text-2xl mb-6">Contact Us</h1>
        <div className="details">
          <ul>
            <li className="flex items-start mb-6">
              <img className="mr-2" src={locationIcon} alt="location" />
              <p>
                Isaac's house, Bema Gradens, First Mechanic Road, Alakahia,
                Choba, Port-Harcourt
              </p>
            </li>
            <li className="flex mb-6">
              <img className="mr-2" src={emailIcon} alt="email" />
              <p>Kenebebhwork@email.com</p>
            </li>
            <li className="flex mb-6">
              <img className="mr-2" src={phoneIcon} alt="phone" />
              <p>09069312305</p>
            </li>
            <li className="flex mb-6">
              <img className="mr-2" src={faxIcon} alt="fax" />
              <p>+3356 1589 2100</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
