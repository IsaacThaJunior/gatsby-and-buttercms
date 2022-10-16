import * as React from 'react';
import { Link } from 'gatsby';
import axios from 'axios';

const URL = `https://api.buttercms.com/v2/pages/*/about-page?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const About = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		axios
			.get(URL)
			.then((res) => setData(res?.data?.data?.fields?.about_component))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="flex justify-center items-center md:mx-10 lg:mx-48 xl:m-auto xl:h-full">
			<div className="container flex bg-red-200 flex-col xl:flex-row-reverse ">
				<div className="rightSide bg-neutral-500 xl:w-1/2">
					<img className="w-full h-full" src={data?.image} alt="coders" />
				</div>
				<div className="leftSide bg-green-200 xl:w-1/2 py-16 px-16 xl:py-8 2xl:py-16 text-center">
					<h1 className="text-3xl text-emerald-500 font-bold mb-8">
						{data?.heading}
					</h1>
					<p className="text-slate-800 mb-8">{data?.description}</p>
					<p className="text-slate-800 mb-8">{data?.secondary_description}</p>
					<button className="bg-green-600 text-white rounded-md p-3 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
						<Link to="#">Join us</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default About;
