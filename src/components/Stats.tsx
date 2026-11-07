import { useLanguage } from '../i18n/LanguageContext';

interface StatsProps {
  completed: number;
  remaining: number;
}

export function Stats({ completed, remaining }: StatsProps) {
  const { t } = useLanguage();
  const total = completed + remaining;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="stats-block">
      <div className="stats" role="status" aria-live="polite">
        <span className="badge badge--completed">{t.stats.completed(completed)}</span>
        <span className="badge badge--remaining">{t.stats.remaining(remaining)}</span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label={t.stats.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <span className="progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
