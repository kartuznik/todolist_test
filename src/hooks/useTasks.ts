import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Task, TaskFilter, TaskStats } from '../types/task';
import { createTaskId, loadTasks, saveTasks } from '../utils/storage';

export interface UseTasksResult {
  tasks: Task[];
  visibleTasks: Task[];
  filter: TaskFilter;
  stats: TaskStats;
  setFilter: (filter: TaskFilter) => void;
  addTask: (title: string) => boolean;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function useTasks(): UseTasksResult {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [filter, setFilterState] = useState<TaskFilter>('all');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const setFilter = useCallback((next: TaskFilter) => {
    setFilterState(next);
  }, []);

  const addTask = useCallback((title: string): boolean => {
    const trimmed = title.trim();
    if (trimmed.length === 0) {
      return false;
    }

    const task: Task = {
      id: createTaskId(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((current) => [...current, task]);
    setFilterState((current) => (current === 'done' ? 'all' : current));
    return true;
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  }, []);

  const stats = useMemo<TaskStats>(() => {
    const completed = tasks.filter((task) => task.completed).length;
    const total = tasks.length;
    return {
      completed,
      remaining: total - completed,
      total,
    };
  }, [tasks]);

  const visibleTasks = useMemo<Task[]>(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'done') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }, [filter, tasks]);

  return {
    tasks,
    visibleTasks,
    filter,
    stats,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
  };
}
