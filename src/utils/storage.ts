import type { Task } from '../types/task';

export const TASKS_STORAGE_KEY = 'todolist.tasks';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isTask(value: unknown): value is Task {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === 'string' &&
    value.id.length > 0 &&
    typeof value.title === 'string' &&
    typeof value.completed === 'boolean' &&
    typeof value.createdAt === 'number' &&
    Number.isFinite(value.createdAt)
  );
}

/**
 * Parse a raw localStorage payload.
 * Corrupt JSON, a non-array, or any item with the wrong shape yields an empty list.
 */
export function parseStoredTasks(raw: string | null): Task[] {
  if (raw === null || raw.trim() === '') {
    return [];
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }

  if (!Array.isArray(parsed)) {
    return [];
  }

  const tasks: Task[] = [];
  for (const item of parsed) {
    if (!isTask(item)) {
      return [];
    }
    tasks.push({
      id: item.id,
      title: item.title,
      completed: item.completed,
      createdAt: item.createdAt,
    });
  }

  return tasks;
}

export function loadTasks(): Task[] {
  try {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    return parseStoredTasks(localStorage.getItem(TASKS_STORAGE_KEY));
  } catch {
    return [];
  }
}

export function saveTasks(tasks: readonly Task[]): void {
  try {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Quota or privacy mode: keep the in-memory list and avoid crashing.
  }
}

export function createTaskId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `task-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
