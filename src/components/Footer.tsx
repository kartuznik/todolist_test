import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  );
}
