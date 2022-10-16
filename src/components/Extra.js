import * as React from "react";
import axios from "axios";

const URL = `https://api.buttercms.com/v2/content/extra?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Extra = () => {

  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    axios.get(URL).then((res) => {
      setDatas(res?.data?.data?.extra);
    });
  }, []);

  return (
    <div className="flex px-8 bg-amber-50 py-24 flex-col">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        More from us
      </h1>

      <div className="items-container w-full flex flex-wrap justify-center">
        {datas.map((data) => (
          <div
            className="px-0 bg-amber-100 m-5 pt-0 pb-10 w-96 flex flex-col items-center rounded-lg overflow-hidden hover:bg-amber-200 hover:-translate-y-1 transition-all duration-300"
            key={data.id}
          >
            <img className="self-stretch" src={data.imgSrc} alt='' />
            <h2 className="text-xl text-green-600 uppercase m-2 font-bold text-center">
              {data.title}
            </h2>
            <p className="text-lg italic px-3 text-center mt-3">
              {data.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
