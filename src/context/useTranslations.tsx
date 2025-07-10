'use client';

import { useLanguage } from './LanguageContext';
import enMessages from '../../messages/en.json';
import zhMessages from '../../messages/zh.json';

type TranslationMessages = typeof enMessages;
type TranslationKey = keyof typeof enMessages;

export function useTranslations() {
  const { language } = useLanguage();
  const messages: TranslationMessages = language === 'en' ? enMessages : zhMessages;

  const t = (key: string, params?: Record<string, string>) => {
    try {
      const keys = key.split('.');
      let value: any = messages;
      
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      
      if (params) {
        return Object.entries(params).reduce(
          (str, [key, value]) => str.replace(`{${key}}`, value),
          value
        );
      }
      
      return value;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  return { t };
}
