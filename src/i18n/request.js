import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['tr', 'en', 'de'];
  const lng = supported.includes(locale) ? locale : 'tr';
  const messages = (await import(`../messages/${lng}.json`)).default;
  return {locale: lng, messages};
});