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
				authToken: process.env.API_KEY,
				// Optional. Returns values for the supplied content field keys.
				contentFields: {
					keys: [`collection_key`],
					// Optional. Set to 1 to enable test mode for viewing draft content.
					test: 0,
				},
				// Optional. Array of page types.
				pageTypes: [`page_type_key`],
				// Optional array of locales (if configured in your account)
				locales: [`en`, `es`, `fr`],
				preview: 1, // Return draft content
			},
		},
	],
};
