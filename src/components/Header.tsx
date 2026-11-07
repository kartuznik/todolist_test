import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <span className="header__brand">{t.header.logo}</span>
      <span className="header__label">{t.header.tagline}</span>
    </header>
  );
}
