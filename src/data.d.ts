type OpenGraph = {
	type: string;
	locale: string;
	url: string;
	title: string;
	description: string;
	siteName: string;
	images: string[];
};

type Twitter = {
	card: string;
	title: string;
	description: string;
	images: string[];
	creator: string;
};

type ThemeColor = {
	media: string;
	color: string;
};

type SiteConfig = {
	name: string; // 网站名称
	title: string; // 网站标题
	logo: string; // 网站图标
	description: string; // 网站描述
	url: string; // 网站地址
	ogImage: string; // 网站预览图
	metadataBase: URL; // 基本 URL 前缀。
	keywords: string[]; // 网站关键词
	locale: string; // 网站语言
	openGraph: OpenGraph; // OpenGraph
	twitter: Twitter; // Twitter
	themeColors?: string | ThemeColor[];
};
