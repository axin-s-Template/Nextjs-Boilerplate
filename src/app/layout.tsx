import siteMetadata from '@/config/siteMetadata';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(siteMetadata.url),
	title: {
		template: '%s | ' + siteMetadata.name,
		default: siteMetadata.title
	},
	description: siteMetadata.description,
	keywords: '%s,' + siteMetadata.keywords.join(','),
	manifest: '/site.webmanifest',
	openGraph: siteMetadata.openGraph,
	twitter: siteMetadata.twitter
	// alternates: {
	// 	canonical: constructSiteUrl('/'),
	// 	types: {
	// 		'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }]
	// 	}
	// },
	// other: {
	// 	'baidu-site-verification': 'codeva-7AmpPWgzQY',
	// 	'google-site-verification': 'TTbfOvWmLj0icfk0BQNUZB3crwReji82Q_vRdnZFFAc'
	// }
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<body className={inter.className}>
				<AntdRegistry>{children}</AntdRegistry>
			</body>
		</html>
	);
}
