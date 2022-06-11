/** @type {import('next').NextConfig} */
//const { i18n } = require('./next-i18next.config');

const nextConfig = {
	reactStrictMode: true,
	/*i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		localeDetection: false,
	},*/
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	webpack: (config, options) => {
		config.resolve.alias = {
			...config.resolve.alias,
			react: require.resolve('react').replace('index.js', ''),
		};

		return config;
	},
};


module.exports = nextConfig


