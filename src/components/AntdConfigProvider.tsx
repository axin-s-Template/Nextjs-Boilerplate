'use client';
import customTheme from '@/config/theme';
import { useThemeStore } from '@/store/themeStore';
import { ConfigProvider, theme } from 'antd';

export default function AntdConfigProvider({
	children
}: {
	children: React.ReactNode;
}) {
	const { isDarkMode } = useThemeStore();
	console.log(typeof isDarkMode, !!isDarkMode, 'isDarkMode-log');
	console.warn(typeof isDarkMode, !!isDarkMode, 'isDarkMode-warn');
	console.warn('这是一个 客户端打印', 'adsfas');
	return (
		<ConfigProvider
			theme={{
				...customTheme,
				algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
			}}
		>
			{children}
		</ConfigProvider>
	);
}
