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

function emptyMessage(filter: TaskFilter, isEmptyList: boolean): string {
  if (isEmptyList || filter === 'all') {
    return 'No tasks yet. Add your first task above!';
  }
  if (filter === 'active') {
    return 'No active tasks.';
  }
  return 'No completed tasks.';
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
  const totalLabel = `${total.toString().padStart(2, '0')} TOTAL`;

  return (
    <section className="task-section" aria-labelledby="your-tasks-heading">
      <div className="task-section__header">
        <h2 id="your-tasks-heading" className="task-section__title">
          YOUR TASKS
        </h2>
        <p className="task-section__total">{totalLabel}</p>
      </div>
      <Filters value={filter} onChange={onFilterChange} />
      {tasks.length === 0 ? (
        <EmptyState message={emptyMessage(filter, isEmptyList)} />
      ) : (
        <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
      )}
    </section>
  );
}
