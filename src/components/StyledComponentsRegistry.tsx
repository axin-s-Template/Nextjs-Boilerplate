'use client';

import type Entity from '@ant-design/cssinjs/es/Cache';
import {
	createCache,
	extractStyle,
	StyleProvider
} from '@ant-design/cssinjs/es/index';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
	const cache = React.useMemo<Entity>(() => createCache(), []);
	useServerInsertedHTML(() => (
		<style
			id="antd"
			dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
		/>
	));
	// hashPriority="low"
	return (
		<StyleProvider layer cache={cache}>
			{children}
		</StyleProvider>
	);
};

export default StyledComponentsRegistry;
