import { useEffect, useState } from 'react';
import type { AnimationEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function StatusIcon({ completed }: { completed: boolean }) {
  if (completed) {
    return (
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M6.2 10.15 8.7 12.65 13.85 7.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="5" fill="currentColor" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M4.5 7h15M9.5 7V5.6A1.6 1.6 0 0 1 11.1 4h1.8a1.6 1.6 0 0 1 1.6 1.6V7M7 7l.7 12.1A1.5 1.5 0 0 0 9.2 20.5h5.6a1.5 1.5 0 0 0 1.5-1.4L17 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11v6M14 11v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const EXIT_MS = 200;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const { t } = useLanguage();
  const [exiting, setExiting] = useState(false);
  const className = [
    'task-item',
    task.completed ? 'task-item--done' : '',
    exiting ? 'task-item--exiting' : '',
  ]
    .filter((name) => name.length > 0)
    .join(' ');
  const toggleLabel = task.completed
    ? t.aria.toggleActive(task.title)
    : t.aria.toggleDone(task.title);

  useEffect(() => {
    if (!exiting) {
      return;
    }
    const timeout = window.setTimeout(() => onDelete(task.id), EXIT_MS);
    return () => window.clearTimeout(timeout);
  }, [exiting, onDelete, task.id]);

  const requestDelete = () => {
    if (exiting) {
      return;
    }
    if (prefersReducedMotion()) {
      onDelete(task.id);
      return;
    }
    setExiting(true);
  };

  const handleExitAnimation = (event: AnimationEvent<HTMLLIElement>) => {
    if (event.animationName === 'task-exit') {
      onDelete(task.id);
    }
  };

  return (
    <li className={className} onAnimationEnd={handleExitAnimation}>
      <button
        type="button"
        className="task-item__main"
        aria-label={toggleLabel}
        aria-pressed={task.completed}
        onClick={() => onToggle(task.id)}
      >
        <span className="task-item__icon">
          <StatusIcon completed={task.completed} />
        </span>
        <span className="task-item__title">{task.title}</span>
      </button>
      <button
        type="button"
        className="task-item__delete"
        aria-label={t.aria.delete(task.title)}
        onClick={requestDelete}
      >
        <TrashIcon />
      </button>
    </li>
  );
}
