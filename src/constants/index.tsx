/**
 * 前端地址（线上）
 */
export const WEB_HOST_PROD = 'https://www.xxx.com';

/**
 * 后端地址（本地）
 */
export const BACKEND_HOST_LOCAL = 'https://www.mianshiya.com';

/**
 * 后端地址（测试）
 */
export const BACKEND_HOST_TEST = 'https://test.code-nav.cn';

/**
 * 后端地址（线上）
 */
export const BACKEND_HOST_PROD = 'https://api.mianshiya.com';

/**
 * 正式环境系统用户 ID
 */
export const PROD_SYSTEM_USER_ID = '1610518142000300034';

/**
 * 不需要服务端缓存的请求选项（可用于区别静态渲染和服务端渲染）
 */
export const NEXT_NO_CACHE_REQUEST_OPTIONS = { next: { revalidate: 0 } };

// 通用优先级枚举
export const PRIORITY_ENUM = {
	DEFAULT: 0,
	GOOD: 999,
	TOP: 9999
};

/**
 * 客户端环境判断
 */
export const IS_CLIENT = typeof window !== 'undefined';

// 布尔类型枚举
export const BOOLEAN_ENUM = {
	0: '否',
	1: '是'
};

/**
 * 审核状态枚举
 */
export const REVIEW_STATUS_ENUM = {
	REVIEWING: 0,
	PASS: 1,
	REJECT: 2
};

/**
 * 审核状态信息映射
 */
export const REVIEW_STATUS_INFO_MAP = {
	0: {
		text: '待审核',
		color: 'blue'
	},
	1: {
		text: '通过',
		color: 'green'
	},
	2: {
		text: '拒绝',
		color: 'red'
	}
};

/**
 * 审核状态信息映射
 */
export const REVIEW_STATUS_MAP = {
	0: '待审核',
	1: '通过',
	2: '拒绝'
};

/**
 * 点赞类型枚举
 */
export const THUMB_TYPE_ENUM = {
	QUESTION: 0,
	ANSWER: 1
};

/**
 * 需要优化类型枚举
 */
export const OPTIMIZE_TYPE_ENUM = {
	QUESTION: 0,
	ANSWER: 1
};

/**
 * 微信交易状态映射
 */

export const TRADE_STATE_ENUM = {
	SUCCESS: {
		text: '支付成功'
	},
	REFUND: {
		text: '转入退款'
	},
	NOTPAY: {
		text: '未支付'
	},
	CLOSED: {
		text: '已关闭'
	},
	REVOKED: {
		text: '已撤销'
	},
	USERPAYING: {
		text: '用户支付中'
	},
	PAYERROR: {
		text: '支付失败'
	}
};
