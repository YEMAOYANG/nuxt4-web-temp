# ABC Official Website

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Nuxt 4](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt&labelColor=020420)](https://nuxt.com)

ABC 官方网站 - 展示我们的 AI 魔法产品，包括 PhotoRestore（照片修复）、FaceSwap（换脸）和 AI Character（AI 角色生成）。

## ✨ 主要功能

- 🎨 **现代化设计** - 精美的 UI 界面和流畅的用户体验
- 📱 **响应式布局** - 完美支持移动端、平板和桌面设备
- 🚀 **高性能** - 基于 Nuxt 4 和 Vue 3，提供极致的加载速度
- 🎯 **SEO 优化** - 完善的 SEO 元数据和 OG 图片支持
- 🌙 **深色模式** - 内置明暗主题切换支持

## 🛠️ 技术栈

- **框架**: [Nuxt 4](https://nuxt.com) - Vue 3 全栈框架
- **UI 组件**: [Nuxt UI v4](https://ui.nuxt.com) - 基于 Tailwind CSS 的组件库
- **图片优化**: [Nuxt Image](https://image.nuxt.com) - 自动图片优化和响应式处理
- **图标**: [Iconify](https://iconify.design) - Lucide 和 Simple Icons
- **工具库**: [VueUse](https://vueuse.org) - Vue 组合式工具集
- **样式**: SCSS + Tailwind CSS
- **代码规范**: ESLint + TypeScript

## 📦 安装依赖

确保你已经安装了 [pnpm](https://pnpm.io/)：

```bash
pnpm install
```

## 🚀 开发

启动开发服务器，访问 `http://localhost:3000`：

```bash
pnpm dev
```

## 🏗️ 构建

构建生产环境应用：

```bash
pnpm build
```

预渲染模式构建（推荐用于静态部署）：

```bash
pnpm build:prerender
```

本地预览生产构建：

```bash
pnpm preview
```

## 📝 代码质量

运行 ESLint 检查：

```bash
pnpm lint
```

自动修复 ESLint 错误：

```bash
pnpm lint:fix
```

TypeScript 类型检查：

```bash
pnpm typecheck
```

## 📁 项目结构

```text
officewebsite/
├── app/
│   ├── assets/          # 静态资源
│   │   ├── css/         # 样式文件
│   │   ├── icons/       # SVG 图标
│   │   └── images/      # 图片资源
│   ├── components/      # Vue 组件
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── HeroBackground.vue
│   │   └── ...
│   ├── layouts/         # 布局组件
│   └── pages/           # 页面
│       └── index.vue    # 首页
├── public/              # 公共资源
│   └── services/        # 服务条款和隐私政策
├── types/               # TypeScript 类型定义
├── nuxt.config.ts       # Nuxt 配置
├── app.config.ts        # 应用配置
└── package.json         # 项目依赖
```

## 🎨 产品介绍

### PhotoRestore - 智能照片修复

使用先进的 AI 技术精准修复划痕、褪色、模糊等问题，一键恢复珍贵回忆。

### FaceSwap - AI 换脸

支持照片和视频中的人脸识别和替换，适用于娱乐、社交等多种场景。

### AI Character - AI 角色生成

将照片转换为精美的动漫风格作品，支持多种转换风格和高分辨率输出。

## 🌐 部署

查看 [Nuxt 部署文档](https://nuxt.com/docs/getting-started/deployment) 了解更多信息。

## 📄 许可证

Copyright © 2025 ABC Technology Limited. All rights reserved.

## 📧 联系我们

- **公司**: ABC Technology Limited
- **邮箱**: <contact@ABC.ai>

---

Made with ❤️ by ABC Team
