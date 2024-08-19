const isClient = typeof window !== 'undefined';
/**
 * 构建基于当前环境的站点URL。
 * @param path - 要附加到站点URL的路径。
 * @returns 完整的站点URL。
 */
export function constructSiteUrl(path = '') {
	if (isClient) {
		return window.location.origin + path;
	}
	const baseUrl =
		process.env.NODE_ENV === 'production'
			? process.env.NEXT_PUBLIC_SITE_URL
			: 'http://localhost:3000';

	return new URL(path, baseUrl);
}
