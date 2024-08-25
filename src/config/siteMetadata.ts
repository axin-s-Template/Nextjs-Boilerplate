const url = new URL(
	process.env.NODE_ENV === 'production'
		? 'https://demo.luckysnail.cn/'
		: 'http://localhost:3000/'
);

const baseSiteConfig = {
	name: 'Next.js + antd starter 模板',
	title: 'Next.js + antd starter 模板',
	logo: '/logo.png',
	description: '简洁干净的antd + Next.js 14 的项目模板',
	url: url.href,
	// 网站预览图
	ogImage: `${url.origin}/og.png`,
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
	metadataBase: url,
	keywords: ['模板', 'Next.js', 'antd', 'ant design'],
	locale: 'zh-CN',
	themeColors: [
		{ media: '(prefers-color-scheme: dark)', color: '#000212' },
		{ media: '(prefers-color-scheme: light)', color: '#fafafa' }
	]
};
const siteMetadata: SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: baseSiteConfig.locale,
		url: baseSiteConfig.url,
		title: baseSiteConfig.title,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
		images: [`${baseSiteConfig.url}og.png`]
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.title,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}og.png`],
		creator: '@haozhan05554957'
	}
};
export default siteMetadata;
