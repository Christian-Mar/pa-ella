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
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};


module.exports = nextConfig


