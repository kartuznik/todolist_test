import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <h1 className="hero__title">{t.hero.title}</h1>
      <p className="hero__subtitle">{t.hero.subtitle}</p>
    </section>
  );
}
