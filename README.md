# Next.js + ant design + Tailwind CSS + TypeScript Starter

基于 Next.js + antd 的启动模板。开发前先阅读：https://yuyuanweb.yuque.com/org-wiki-yuyuanweb-zvq1bg/yn7n8x/zsgo638r4fxrg5ug

## 功能特性

- 集成 antd 组件库
- typescript
- tailwindcss
- 提交规范
- 代码风格规范
- 状态管理
- SEO
- openapi 通过swagger 生成接口请求
- 导航，通用布局
- 后台管理模板页面
- 登录
- 权限
- 404
- 通用接口请求封装
- 测试（待做）

## 技术栈

- next.js 框架
- tailwindcss 样式
- antd 组件库

## 项目目录

src：源码
public：静态资源。图片不需要动态变化，就放在public 下
src/libs：重要工具方法，例如：请求方法
src/components：组件
src/app：页面
src/styles：样式
src/config：网站配置
src/constants ：常量
src/hooks：react 自定义 hooks
src/layouts ：布局
src/utils：工具
src/store：状态管理
src/assets：静态资源，图标，图片，等

## 代码风格规范

## 技术栈

- zustand 状态管理

## 注意

1. Node 版本 >= 18.16，推荐使用 20.11.0
2. 操作 id，不要把 id 转为 number 类型，否则会出现精度丢失问题
3. 页面组件命名：首字母大写，驼峰命名，例如：HomePage， 文件夹名称和默认到处组件名称保持一致
4. classname 声明样式类，遵循：[BEM 规范](https://www.bemcss.com/)。例如：`.custom-btn`
5.
