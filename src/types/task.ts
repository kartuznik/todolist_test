export type TaskFilter = 'all' | 'active' | 'done';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export interface TaskStats {
  completed: number;
  remaining: number;
  total: number;
}
