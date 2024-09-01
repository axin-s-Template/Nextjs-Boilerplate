'use client';
import styles from '@/styles/bank.module.css';
import { Button } from 'antd';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';

const StyledDiv = styled.div`
	border-radius: '12px';
	.btn {
		color: pink;
	}
`;
export default function BankPage() {
	return (
		<div>
			<Title level={2} className={styles['bank-title']}>
				Bank
			</Title>
			<StyledDiv>
				<Button type="primary" className="btn">
					测试
				</Button>
				<Button type="primary" className="bg-red-300 text-violet-500">
					测试
				</Button>
			</StyledDiv>
		</div>
	);
}
