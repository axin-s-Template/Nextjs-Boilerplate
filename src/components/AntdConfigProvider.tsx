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
	console.log(typeof isDarkMode, !!isDarkMode, 'isDarkMode');
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
