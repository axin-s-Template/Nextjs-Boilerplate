import ThemeSwitcher from '@/components/ThemeToggle';
import { Button, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	console.log('这是一个 Node 端打印');

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ThemeSwitcher />
			<Title level={1}>Next.js + antd 启动模板！</Title>
			<Link href={'/bank'}>
				<Button type="primary">去测试</Button>
			</Link>
			<div
				style={{
					width: '200px',
					height: '50px',
					position: 'relative'
				}}
			>
				<Image src="/logo.png" fill alt="next.js template logo" />
			</div>
			<Row gutter={[16, 16]}>
				<Col span={6}>左边</Col>
				<Col span={18}>右边</Col>
			</Row>
		</main>
	);
}
