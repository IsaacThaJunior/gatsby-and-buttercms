import * as React from "react";
import axios from "axios";

const URL = `https://api.buttercms.com/v2/content/features_collections?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Features = () => {

  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    axios.get(URL).then((res) => {
      setDatas(res?.data?.data?.features_collections);
    });
  }, []);


  return (
    <div className="py-24">
      <h1 className="flex justify-center uppercase text-4xl text-green-600 pb-8 font-bold">
        Our main features
      </h1>

      <div className="w-full flex flex-wrap justify-center">
        {datas.map((data) => (
          <div className="px-1 bg-amber-50 m-5 mb-8 pt-5 pb-10 w-96 flex flex-col items-center rounded-md hover:bg-amber-100 hover:-translate-y-1 transition-all duration-300" key={data.id}>
            <img className="mb-5" src={data.icon} alt='' />
            <h2 className="text-lg italic">{data.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
