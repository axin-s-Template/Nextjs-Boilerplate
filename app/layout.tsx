import siteMetadata from '@/data/siteMetadata';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProviders from './theme-providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next.js 模板！',
	description: 'Next.js 基础启动模板'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProviders>{children}</ThemeProviders>
			</body>
		</html>
	);
}
