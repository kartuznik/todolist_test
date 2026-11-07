import { useLanguage } from '../i18n/LanguageContext';
import type { Translations } from '../i18n/types';
import type { Task, TaskFilter } from '../types/task';
import { EmptyState } from './EmptyState';
import { Filters } from './Filters';
import { TaskList } from './TaskList';

interface TaskSectionProps {
  total: number;
  filter: TaskFilter;
  tasks: readonly Task[];
  isEmptyList: boolean;
  onFilterChange: (filter: TaskFilter) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function emptyMessage(filter: TaskFilter, isEmptyList: boolean, t: Translations): string {
  if (isEmptyList || filter === 'all') {
    return t.empty.all;
  }
  if (filter === 'active') {
    return t.empty.active;
  }
  return t.empty.done;
}

export function TaskSection({
  total,
  filter,
  tasks,
  isEmptyList,
  onFilterChange,
  onToggle,
  onDelete,
}: TaskSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="task-section" aria-labelledby="your-tasks-heading">
      <div className="task-section__header">
        <h2 id="your-tasks-heading" className="task-section__title">
          {t.tasks.title}
        </h2>
        <p className="task-section__total">{t.tasks.total(total)}</p>
      </div>
      <Filters value={filter} onChange={onFilterChange} />
      {tasks.length === 0 ? (
        <EmptyState message={emptyMessage(filter, isEmptyList, t)} />
      ) : (
        <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
      )}
    </section>
  );
}
