import { useLanguage } from '../i18n/LanguageContext';

interface StatsProps {
  completed: number;
  remaining: number;
}

export function Stats({ completed, remaining }: StatsProps) {
  const { t } = useLanguage();

  return (
    <div className="stats" role="status" aria-live="polite">
      <span className="badge badge--completed">{t.stats.completed(completed)}</span>
      <span className="badge badge--remaining">{t.stats.remaining(remaining)}</span>
    </div>
  );
}
