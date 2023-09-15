/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"img.freepik.com",
			"encrypted-tbn0.gstatic.com",
			'media.istockphoto.com',
			"images.unsplash.com"
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
			},
			{
				protocol: "https",
				hostname: "i.postimg.cc",
			},
		],
	},
};

module.exports = nextConfig;
