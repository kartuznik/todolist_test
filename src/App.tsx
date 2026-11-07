import { AddTaskButton } from './components/AddTaskButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HorizonSection } from './components/HorizonSection';
import { Hero } from './components/Hero';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Stats } from './components/Stats';
import { TaskSection } from './components/TaskSection';
import { useTasks } from './hooks/useTasks';

export default function App() {
  const { visibleTasks, filter, stats, setFilter, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="page">
      <LanguageSwitcher />
      <div className="container">
        <Header />
        <main>
          <Hero />
          <Stats completed={stats.completed} remaining={stats.remaining} />
          <AddTaskButton onAdd={addTask} />
          <TaskSection
            total={stats.total}
            filter={filter}
            tasks={visibleTasks}
            isEmptyList={stats.total === 0}
            onFilterChange={setFilter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
          <HorizonSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
