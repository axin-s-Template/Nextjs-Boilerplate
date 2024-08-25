import ThemeSwitcher from '@/components/ThemeToggle';
import { Button } from 'antd';
import Title from 'antd/es/typography/Title';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ThemeSwitcher />
			<Title level={1}>Next.js + antd 启动模板！</Title>
			<Button type="primary">去测试</Button>
		</main>
	);
}
