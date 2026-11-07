interface StatsProps {
  completed: number;
  remaining: number;
}

export function Stats({ completed, remaining }: StatsProps) {
  return (
    <div className="stats" role="status" aria-live="polite">
      <span className="badge badge--completed">{completed} COMPLETED</span>
      <span className="badge badge--remaining">{remaining} REMAINING</span>
    </div>
  );
}
