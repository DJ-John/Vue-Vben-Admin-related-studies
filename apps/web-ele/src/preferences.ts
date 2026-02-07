import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  logo: {
    source: '/logo.svg',
  },
  copyright: {
    icp: '粤备案号备11010802000100',
    icpLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    date: '2026',
    companyName: 'MOOQU PODify',
  },
  footer: {
    enable: false,
  },
  theme: {
    mode: 'light',
    semiDarkSidebar: true,
  },
});
