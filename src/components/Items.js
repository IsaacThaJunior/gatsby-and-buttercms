import * as React from "react";
import axios from "axios";

const URL = `https://api.buttercms.com/v2/content/items_collection?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Items = () => {
  const [datas, setDatas] = React.useState([]);

React.useEffect(() => {
    axios.get(URL).then((res) => {
      setDatas(res?.data?.data?.items_collection);
    });
}, []);

  return (
    <div className="flex px-8 bg-amber-50 py-24 flex-col">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        Our products
      </h1>

      <div className="items-container w-full flex flex-wrap justify-center lg:w-full xl:w-3/4 xl:m-auto">
        {datas.map((data) => (
          <div
            className="px-1 bg-amber-100 m-5 pt-5 pb-10 w-96 flex flex-col items-center rounded-md hover:bg-yellow-100 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
            key={data.id}
          >
            <img className="self-stretch" src={data.image} alt='' />
            <h2 className="text-xl text-green-600 uppercase m-2 font-bold">
              {data.title}
            </h2>
            <p className="text-lg italic">Written by {data.author} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
