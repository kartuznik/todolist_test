import type { Lang } from '../i18n/types';
import { useLanguage } from '../i18n/LanguageContext';

const OPTIONS: readonly { value: Lang; label: string }[] = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label={t.aria.lang}>
      {OPTIONS.map((option) => {
        const selected = lang === option.value;
        const className = selected
          ? 'lang-switcher__button lang-switcher__button--active'
          : 'lang-switcher__button';

        return (
          <button
            key={option.value}
            type="button"
            className={className}
            aria-pressed={selected}
            onClick={() => setLang(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
