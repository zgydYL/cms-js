# Content Management System (CMS) JavaScript 版本

## 项目概述

这是一个基于 Vue 3 的单页应用(SPA)，采用了组件化开发模式和前后端分离架构。项目使用 Vite 作为构建工具，提供了快速的开发体验。整体遵循 MVVM 设计模式，通过 Vue Router 实现页面路由管理，使用 Pinia 进行状态管理。

## 技术栈

- Vue 3
- Vite
- Vue Router
- Pinia
- normalize.css

## 项目结构

```
cms-js/
├── src/
│   ├── assets/
│   │   └── css/
│   │       ├── common.css
│   │       ├── index.css
│   │       └── reset.css
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── views/
│   │   └── home/
│   │       └── index.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── jsconfig.json
├── package.json
└── vite.config.js
```

## 模块功能详解

### 核心配置文件
- `package.json`: 定义项目元数据、依赖项和脚本命令
- `vite.config.js`: Vite 构建工具配置文件，设置了路径别名(@指向 src 目录)
- `index.html`: 应用的 HTML 模板文件

### 主要源代码(src/)
- `main.js`: 应用入口文件，初始化 Vue 应用实例，注册路由和状态管理
- `App.vue`: 根组件，使用 `router-view` 渲染当前路由对应的组件

### 资源文件(assets/)
- `css/` 目录存放样式文件:
  - `reset.css`: CSS 重置样式，统一不同浏览器默认样式
  - `common.css`: 公共样式文件(目前为空)
  - `index.css`: 样式入口文件(目前为空)

### 路由(router/)
- `index.js`: 路由配置文件，采用 hash 模式，目前配置了两个路由:
  - `/`: 根路径重定向到 `/home`
  - `/home`: 首页路由，加载 HomeView 组件

### 状态管理(store/)
- `index.js`: Pinia 状态管理实例创建文件

### 页面视图(views/)
- `home/`:
  - `index.vue`: 首页组件，目前仅显示 "homePage" 标题

## 开发环境

确保你的系统满足以下要求：

- Node.js 版本 ^20.19.0 或 >=22.12.0

## 安装与运行

1. 安装依赖：
   ```
   npm install
   ```

2. 启动开发服务器：
   ```
   npm run dev
   ```

3. 构建生产版本：
   ```
   npm run build
   ```

4. 预览生产构建：
   ```
   npm run preview
   ```

## 关键流程示例

当用户访问应用时，执行流程如下：

1. 浏览器加载 `index.html`
2. 加载并执行 `src/main.js`
3. 创建 Vue 应用实例并注册 Vue Router 和 Pinia
4. 挂载应用到 DOM 元素 `#app`
5. Vue Router 根据 URL 确定当前路由(默认为 `/home`)
6. 渲染对应的组件(`src/views/home/index.vue`)

这个项目是一个很好的 Vue 3 + Vite 基础框架，可以根据具体业务需求逐步扩展功能。