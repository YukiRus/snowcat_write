# SnowCatWrite-雪猫写作
一款开源的小说写作软件

## 安装

### 使用已构建版本

[![下载](https://img.shields.io/badge/50M-下载--0.2.0--2110.Dev-green.svg)](https://github.com/YukiRus/snowcat_write/releases/download/v0.2.0-2110.Dev/SnowCatWrite-Setup.exe)

- 下载后按提示安装即可使用

### 由代码开始

#### 安装依赖

```
npm install
```

- npm install 执行完毕之后，打开项目目录/node_modules/@electron/get/dist/cjs/artifact-utils.js

```js
// 注释掉以下行
const path = mirrorVar('customDir', opts, details.version).replace('{{ version }}', details.version.replace(/^v/, ''));
// 并在该行下方添加
const path = details.version;
```

- 在控制台中转到 /node_modules/electron
- 执行

```
node install.js
```

- 退回到根目录，执行

```
npm run rebuild
```

#### 启动服务

```
npm run electron:serve
```

#### 构建项目

```
npm run electron:build
```

## 使用

