import * as React from 'react';
import axios from 'axios';

const URL = `https://api.buttercms.com/v2/pages/*/home-page?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Welcome = () => {
	
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		axios.get(URL)
			.then(res => setData(res?.data?.data?.fields?.welcome_component))
			.catch(err => console.log(err));
	}, []);


	return (
		<div className="welcomePanel flex flex-col justify-center items-center bg-slate-800 h-2/3 text-white">
			<h2 className="text-4xl mb-5 text-green-400">
				{data?.header}
			</h2>
			<p className="text-xl w-3/4 md:w-1/2 text-center mb-5">
				{data?.description}
			</p>

			<div className="flex pt-8">
				<button className="bg-green-400 py-3 px-2 rounded-xl text-black mr-5 text-lg hover:text-red">
					Shop Now
				</button>

				<button className="bg-green-400 py-3 px-2 rounded-xl text-black text-lg">
					Dream it
				</button>
			</div>
		</div>
	);
};

export default Welcome;
