### 国际化

增加语种，以及语言包

## 增加本地语种

 `packages\constants\src\core.ts`

## 增加框架的语言包

 `packages\locales\src\langs`

## 新增业务础语言包

 `apps\web-ele\src\locales\langs`


## 增加 Message 简易国际化/公共组件语言包

 `packages\@core\composables\src\use-simple-locale\messages.ts`


### 页面国际化调整

登录页免的主标题，副标题，表单标题，表单副标题，logo标题的修改

## 标题

- 主标题 
  - `packages\locales\src\langs\zh-CN\authentication.json` ---> `pageTitle`
  - `apps\web-ele\src\layouts\auth.vue` ---> `$t('authentication.pageTitle')`

- 副标题
  - `packages\locales\src\langs\zh-CN\authentication.json` ---> `pageDesc`
  - `apps\web-ele\src\layouts\auth.vue` ---> `$t('authentication.pageDesc')`

- 表单主标题
  - `packages\locales\src\langs\zh-CN\authentication.json` ---> `welcomeBack`
  - `packages\effects\common-ui\src\ui\authentication\login.vue` ---> `$t('authentication.welcomeBack')`

- 表单副标题
  - `packages\locales\src\langs\zh-CN\authentication.json` ---> `loginSubtitle`
  - `packages\effects\common-ui\src\ui\authentication\login.vue` ---> `$t('authentication.loginSubtitle')`


## LOGO 标题

- 位置
  - `apps\web-ele\src\bootstrap.ts`
  - 具体修改

  ```bash
  import { watch } from 'vue';
  import { updatePreferences } from '@vben/preferences';
  import { i18n } from '@vben/locales';

  const syncAppName = () => {
    updatePreferences({
      app: {
        name: $t('authentication.pageTitle'),
      },
    });
  };
  syncAppName();
  watch(
    () => i18n.global.locale.value,
    () => syncAppName(),
  );
  ```
## 增加 Dayjs/element-plus 的语言加载选项


```
// apps\web-ele\src\locales\index.ts

async function loadDayjsLocale(lang: SupportedLanguagesType) {
  let locale;
  switch (lang) {
    case 'en-US': {
      locale = await import('dayjs/locale/en');
      break;
    }
    case 'es-ES': {
      locale = await import('dayjs/locale/es');
      break;
    }
    case 'ja-JP': {
      locale = await import('dayjs/locale/ja');
      break;
    }
    case 'zh-CN': {
      locale = await import('dayjs/locale/zh-cn');
      break;
    }
    // 默认使用英语
    default: {
      locale = await import('dayjs/locale/en');
    }
  }
  if (locale) {
    dayjs.locale(locale);
  } else {
    console.error(`Failed to load dayjs locale for ${lang}`);
  }
}


```


### 更换 LOGO favicon.ico

在 `apps\web-ele\public` 下增加对应的标识

这里使用的是svg,所以需要修改

- `apps\web-ele\index.html`  line:16

LOGO 修改

- `apps\web-ele\src\preferences.ts` line：10-12

ps: 修改之后需要删除本地缓存，在刷新页面




### 总结

新增页面的国际化语言包需要在 `apps\web-ele\src\locales\langs` 下添加对应的语言包;

设计框架本身的内容调整国际化需要在 `packages\locales\src\langs` 中;




