'use client';
// src/components/ThemeSwitcher.tsx
import { useThemeStore } from '@/store/themeStore';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
	const { isDarkMode, toggleTheme } = useThemeStore();

	return (
		<Switch
			checked={isDarkMode}
			onChange={toggleTheme}
			checkedChildren={<BulbOutlined />}
			unCheckedChildren={<BulbFilled />}
		/>
	);
};

export default ThemeSwitcher;
