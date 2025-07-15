import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";
import Legend from "./components/Legend";
import { useTasks } from "./hooks/useTasks";

/**
 * Main application component for the Task Manager.
 *
 * Renders the application layout with header and main content sections.
 * Uses the custom useTasks hook to manage task state and operations.
 *
 * @returns The rendered Task Manager application interface that includes:
 *  - Header with title, Legend component, and outstanding task count
 *  - Main content with a form to add new tasks and a list of existing tasks
 *
 */
function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const outstandingCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Task Manager</h1>
        <Legend />
        <div className="outstanding-count">Outstanding: {outstandingCount}</div>
      </header>
      <main className="app-main">
        <section className="new-task-section">
          <NewTask onAddTask={addTask} />
        </section>
        <section className="task-list-section">
          <TaskList 
            tasks={tasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
