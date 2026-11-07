import { useLanguage } from '../i18n/LanguageContext';
import type { TaskFilter } from '../types/task';

const FILTERS: readonly TaskFilter[] = ['all', 'active', 'done'];

interface FiltersProps {
  value: TaskFilter;
  onChange: (value: TaskFilter) => void;
}

export function Filters({ value, onChange }: FiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="filters" role="group" aria-label={t.filters.label}>
      {FILTERS.map((option) => {
        const selected = option === value;
        const className = selected
          ? 'filters__button filters__button--active'
          : 'filters__button';

        return (
          <button
            key={option}
            type="button"
            className={className}
            aria-pressed={selected}
            onClick={() => onChange(option)}
          >
            {t.filters[option]}
          </button>
        );
      })}
    </div>
  );
}
