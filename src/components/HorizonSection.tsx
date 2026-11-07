import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h17M8 3.5v3.5M16 3.5v3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PrioritiesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M6 3.5v17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 5h11.5l-2.2 3.4 2.2 3.4H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M4 19.5h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 16.5v-4M12 16.5V8M17 16.5v-6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const CARDS: readonly {
  key: 'calendar' | 'priorities' | 'analytics';
  icon: ReactNode;
}[] = [
  { key: 'calendar', icon: <CalendarIcon /> },
  { key: 'priorities', icon: <PrioritiesIcon /> },
  { key: 'analytics', icon: <AnalyticsIcon /> },
];

export function HorizonSection() {
  const { t } = useLanguage();

  return (
    <section className="horizon" aria-labelledby="horizon-title">
      <h2 id="horizon-title" className="horizon__title">
        {t.horizon.title}
      </h2>
      <ul className="horizon__grid">
        {CARDS.map((card) => (
          <li key={card.key} className="horizon__card">
            <span className="horizon__icon">{card.icon}</span>
            <span className="horizon__name">{t.horizon[card.key]}</span>
            <span className="horizon__badge">{t.horizon.soon}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
