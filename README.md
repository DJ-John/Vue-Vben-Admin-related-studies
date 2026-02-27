### 项目配置

这里对项目进行基本的配置，包括样式，主题之类。

ps: 之所以需要修改，需要确定一个主题风格，相关配置需要跟随项目风格来进行确定

## 应用标题

VITE_APP_TITLE=MOOQU PODify

## 应用命名空间，用于缓存、store等功能的前缀，确保隔离

VITE_APP_NAMESPACE=mooqu-podify

- 在本地贮存时，会携带上版本号与环境可以在以下位置进行删除
  - `apps\web-ele\src\main.ts`
  - `internal\vite-config\src\plugins\inject-app-loading\index.ts`



## 样式

**登录后主题的 `LOGO` 和 `title` 的位置**

- `packages\@core\ui-kit\shadcn-ui\src\components\logo\logo.vue` line: 50

**偏好设置的 `title` 的样式调整**

- `packages\@core\ui-kit\popup-ui\src\drawer\drawer.vue` line:240
将 `SheetTitle` 和 `SheetDescription` 使用 `div` 包裹起来就可以

**全局功能样式的调整**


下面是 `packages/@core/preferences/src/config.ts` 里每一项配置的用途说明（按模块分组），对应的是系统的默认偏好设置：

*app*
- `accessMode`: 访问控制模式（如前端权限/后端权限）。

- `authPageLayout`: 登录/认证页布局样式（如右侧面板）。
- `checkUpdatesInterval`: 检查更新的时间间隔（单位通常是分钟或小时，需结合实现）。
- `colorGrayMode`: 灰色模式（一般用于哀悼模式）。
- `colorWeakMode`: 色弱模式（增强可访问性）。
- `compact`: 整体紧凑模式开关。
- `contentCompact`: 内容区宽度模式（如 `wide`）。
- `contentCompactWidth`: 内容区固定宽度（像素）。
- `contentPadding` / `contentPaddingTop` 等: 内容区内边距（总/上下左右）。
- `defaultAvatar`: 默认头像 URL。
- `defaultHomePath`: 默认首页路由。
- `dynamicTitle`: 是否根据路由动态更新页面标题。
- `enableCheckUpdates`: 是否启用自动检查更新。
- `enablePreferences`: 是否启用偏好设置入口/功能。
- `enableRefreshToken`: 是否启用 Refresh Token。
- `isMobile`: 是否处于移动端（一般由运行时判断）。
- `layout`: 整体布局类型（如侧边栏布局）。
- `locale`: 默认语言区域。
- `loginExpiredMode`: 登录过期处理方式（如跳转登录页）。
- `name`: 应用名称。
- `preferencesButtonPosition`: 偏好设置按钮位置（`auto` 自动）。
- `watermark`: 是否启用水印。
- `zIndex`: 全局层级基准值。

*breadcrumb*
- `enable`: 是否显示面包屑。

- `hideOnlyOne`: 仅一个时是否隐藏。
- `showHome`: 是否显示首页入口。
- `showIcon`: 是否显示图标。
- `styleType`: 样式类型（如普通）。

*copyright*
- `companyName`: 公司名称。

- `companySiteLink`: 公司官网链接。
- `date`: 版权年份。
- `enable`: 是否显示版权信息。
- `icp` / `icpLink`: 备案号及链接（国内站点用）。
- `settingShow`: 是否在设置中显示该项。

*footer*
- `enable`: 是否显示页脚。

- `fixed`: 是否固定在底部。
- `height`: 高度。

*header*
- `enable`: 是否显示顶栏。

- `height`: 顶栏高度。
- `hidden`: 是否隐藏。
- `menuAlign`: 顶栏菜单对齐方式。
- `mode`: 顶栏模式（如固定）。

*logo*
- `enable`: 是否显示 Logo。

- `fit`: 图片适配模式（如 contain）。
- `source`: Logo 图片地址。

*navigation*
- `accordion`: 侧边菜单是否手风琴（只展开一个）。

- `split`: 是否启用菜单分离/分割（看实现含义）。
- `styleType`: 菜单样式（如圆角）。

*shortcutKeys*
- `enable`: 是否启用快捷键。

- `globalLockScreen`: 全局锁屏快捷键。
- `globalLogout`: 全局退出快捷键。
- `globalPreferences`: 全局偏好设置快捷键。
- `globalSearch`: 全局搜索快捷键。

*sidebar*
- `autoActivateChild`: 是否自动激活子菜单。

- `collapsed`: 默认是否折叠。
- `collapsedButton`: 是否显示折叠按钮。
- `collapsedShowTitle`: 折叠时是否显示标题。
- `collapseWidth`: 折叠宽度。
- `enable`: 是否启用侧边栏。
- `expandOnHover`: 悬浮展开。
- `extraCollapse`: 额外折叠模式开关。
- `extraCollapsedWidth`: 额外折叠宽度。
- `fixedButton`: 是否固定折叠按钮。
- `hidden`: 是否隐藏侧边栏。
- `mixedWidth`: 混合布局时宽度。
- `width`: 正常宽度。

*tabbar*
- `draggable`: 是否可拖拽排序。

- `enable`: 是否显示标签栏。
- `height`: 高度。
- `keepAlive`: 是否启用标签缓存。
- `maxCount`: 最大标签数量（0 通常表示不限制）。
- `middleClickToClose`: 是否中键关闭标签。
- `persist`: 是否持久化标签。
- `showIcon`: 是否显示图标。
- `showMaximize`: 是否显示最大化按钮。
- `showMore`: 是否显示更多操作。
- `styleType`: 标签栏样式（如 chrome）。
- `wheelable`: 是否支持滚轮切换。

*theme*
- `builtinType`: 内置主题类型（默认）。

- `colorDestructive` / `colorPrimary` / `colorSuccess` / `colorWarning`: 主题色值。
- `mode`: 主题模式（如暗色）。
- `radius`: 圆角大小。
- `semiDarkHeader`: 顶栏半暗模式。
- `semiDarkSidebar`: 侧边栏半暗模式。

*transition*
- `enable`: 是否启用页面切换动画。

- `loading`: 是否显示加载动画。
- `name`: 动画名称。
- `progress`: 是否显示进度条。

*widget*
- `fullscreen`: 全屏按钮。

- `globalSearch`: 全局搜索按钮。
- `languageToggle`: 语言切换。
- `lockScreen`: 锁屏按钮。
- `notification`: 通知入口。
- `refresh`: 刷新按钮。
- `sidebarToggle`: 侧边栏切换按钮。
- `themeToggle`: 主题切换按钮。



