import type { TaskFilter } from '../types/task';

const FILTERS: readonly { value: TaskFilter; label: string }[] = [
  { value: 'all', label: 'ALL' },
  { value: 'active', label: 'ACTIVE' },
  { value: 'done', label: 'DONE' },
];

interface FiltersProps {
  value: TaskFilter;
  onChange: (value: TaskFilter) => void;
}

export function Filters({ value, onChange }: FiltersProps) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {FILTERS.map((option) => {
        const selected = option.value === value;
        const className = selected
          ? 'filters__button filters__button--active'
          : 'filters__button';

        return (
          <button
            key={option.value}
            type="button"
            className={className}
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
