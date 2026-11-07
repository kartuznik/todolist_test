interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = 'No tasks yet. Add your first task above!',
}: EmptyStateProps) {
  return (
    <p className="empty-state" role="status">
      {message}
    </p>
  );
}
