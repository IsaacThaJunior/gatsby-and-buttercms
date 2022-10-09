require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `butter and gatsby`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-source-buttercms`,
			options: {
				authToken: process.env.BUTTER_CMS_API_KEY,
			},
		},
	],
};
