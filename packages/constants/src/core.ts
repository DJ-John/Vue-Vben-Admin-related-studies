/**
 * @zh_CN 登录页面 url 地址
 */
export const LOGIN_PATH = '/auth/login';

export interface LanguageOption {
  label: string;
  value: 'en-US' | 'es-ES' | 'ja-JP' | 'zh-CN';
}

/**
 * Supported languages
 */
export const SUPPORT_LANGUAGES: LanguageOption[] = [
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: '日本語',
    value: 'ja-JP',
  },
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: 'Español',
    value: 'es-ES',
  },
];
