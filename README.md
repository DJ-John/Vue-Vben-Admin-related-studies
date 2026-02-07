### 精简版本

项目下载之后初步进行内容精简 -- 文档部分

## UI框架精简

- element plus
  - 删除 `apps` 下的 `web-antd`、`web-naive`

## 文档精简

- 删除 `docs`

## 演示代码精简

- 删除 `playground`

## 命令调整

- `build:antd`
- `build:docs`
- `build:naive`
- `build:tdesign`
- `build:play`

- `dev:antd`
- `dev:docs`
- `dev:play`
- `dev:naive`

## 其他精简

- `.changeset` 文件夹用于管理版本变更
- `.github` 文件夹用于存放 `GitHub` 的配置文件
- `.vscode` 文件夹用于存放 `VSCode` 的配置文件，如果你使用其他编辑器，可以删除

- `./scripts/deploy` 文件夹用于存放部署脚本，如果你不需要 `docker` 部署，可以删除

## 依赖安装

```bash

# 根目录下执行

pnpm install

```

## 清除所有依赖重新安装

```bash

# 请在项目根目录下执行
# 该命令会删除整个仓库所有的 node_modules、yarn.lock、package.lock.json后
# 再进行依赖重新安装（安装速度会明显变慢）。

pnpm reinstall

```
