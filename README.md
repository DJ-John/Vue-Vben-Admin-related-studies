### 项目配置

## 清理项目

在前面的配置中，已经进行了 `国际化`, `样式`, `偏好` 等设置, 接下来开始对项目的 `文件`, `登录`, `接口` 进行相关配置。

### 文件清理

清理路由文件, 以及多余的页面文件

*路由*

`apps\web-ele\src\router\routes\modules` 只保留 `dashboard.ts` 文件

*页面文件*

`apps\web-ele\src\views` 保留 `_core`,`dashboard`

`apps\web-ele\src\views\_core` 删除 `about`

### 修改角色的下拉框

- `apps\web-ele\src\layouts\basic.vue` line:63

  - `icon` 可以在 `https://iconify.design/` 中进行选择


