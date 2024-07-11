'use client';
import { ThemeProvider } from 'next-themes';
import { type FC, memo } from 'react';

const ThemeProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
			{children}
		</ThemeProvider>
	);
};

export default memo(ThemeProviders);
