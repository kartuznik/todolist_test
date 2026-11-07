import { useState } from 'react';
import { AddTaskButton } from './components/AddTaskButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { TaskSection } from './components/TaskSection';
import type { TaskFilter } from './types/task';

export default function App() {
  const [filter, setFilter] = useState<TaskFilter>('all');

  return (
    <div className="page">
      <div className="container">
        <Header />
        <main>
          <Hero />
          <Stats completed={0} remaining={0} />
          <AddTaskButton onAdd={() => false} />
          <TaskSection
            total={0}
            filter={filter}
            tasks={[]}
            isEmptyList
            onFilterChange={setFilter}
            onToggle={() => undefined}
            onDelete={() => undefined}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
