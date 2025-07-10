'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="text-gray-700 hover:text-primary"
    >
      {language === 'en' ? '中文' : 'English'}
    </button>
  );
}
