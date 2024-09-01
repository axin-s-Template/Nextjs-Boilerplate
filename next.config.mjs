/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		removeConsole: {
			exclude: process.env.NODE_ENV === 'development' ? [] : ['error', 'warn']
		}
	}
};

export default nextConfig;
