const url = new URL(
	process.env.NODE_ENV === 'production'
		? 'https://mianshiya.cn/'
		: 'http://localhost:3000/'
);

const baseSiteConfig = {
	name: '面试鸭',
	title: '面试鸭刷题神器',
	logo: '/logo.png',
	description:
		'程序员面试刷题，就来面试鸭，程序员免费求职面试刷题网站。海量高频Java,前端,后端,C++,Go,Python,软件测试,IT运维,数据库,SQL,数据结构,算法面试题和优质题解，助你通关校招,社招,实习,国企,互联网,大厂,考研求职面试。帮你备战技术面试、提升编程技术、快速找到工作。面试鸭，程序员求职面试刷题神器。',
	url: url.href,
	// 网站预览图
	ogImage: `${url.origin}/og.png`,
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
	metadataBase: url,
	keywords: [
		'程序员面试',
		'Java面试',
		'前端面试',
		'C++面试',
		'Python面试',
		'go语言面试',
		'软件测试面试',
		'IT运维面试',
		'程序员求职',
		'实习求职',
		'秋招求职',
		'程序员求职',
		'编程学习',
		'计算机'
	],
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
