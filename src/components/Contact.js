import * as React from 'react';
import axios from 'axios';

const URL = `https://api.buttercms.com/v2/pages/*/contact-page?auth_token=${process.env.BUTTER_CMS_API_KEY}`;

const Contact = () => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		axios
			.get(URL)
			.then((res) => setData(res?.data?.data?.fields?.contact_component))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="flex py-24 flex-col relative">
			<div className="mainPage bg-amber-100 shadow-lg py-12 flex flex-col items-center mb-8 md:w-3/4 md:m-auto md:mb-24 xl:absolute xl:left-1/4 xl:w-2/3 2xl:w-1/2">
				<div className="heading">
					<h1 className="text-3xl text-blue-300 font-bold tracking-wide">
						{data?.heading}
					</h1>
					<p className="font-bold text-blue-400 mb-8 italic">
						{data?.paragraph}
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
							<img className="mr-2" src={data?.location_icon} alt="location" />
							<p>{data?.location_description}</p>
						</li>
						<li className="flex mb-6">
							<img className="mr-2" src={data?.email_icon} alt="email" />
							<p>{data?.email_description}</p>
						</li>
						<li className="flex mb-6">
							<img className="mr-2" src={data?.phone_icon} alt="phone" />
							<p>{data?.phone_number}</p>
						</li>
						<li className="flex mb-6">
							<img className="mr-2" src={data?.fax_icon} alt="fax" />
							<p>+{data?.fax_number}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
