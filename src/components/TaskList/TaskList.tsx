import React, { useState } from "react";
import type { TaskListProps } from "../../type";
import TaskItem from "./TaskItem";

/**
 * The TaskList container holds a list of tasks.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array<Task>} props.tasks - Array of task objects to be displayed
 * @param {Function} props.onToggleTask - Callback function when a task's completion status is toggled
 * @param {Function} props.onDeleteTask - Callback function when a task is deleted
 *
 * @returns {JSX.Element} A list of tasks with expand/collapse functionality and empty state message
 *
 */
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  // Track which task is expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2 className="section-title">Task List</h2>
      </div>
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="no-tasks-message">Add a task to get started!</div>
        ) : (
          tasks.map((task, idx) => (
            <TaskItem
              key={task.id}
              task={task}
              isExpanded={expandedId === task.id}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
              onToggleExpand={handleToggleExpand}
              index={idx}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
