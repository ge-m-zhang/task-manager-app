import React from "react";
import TaskForm from "./TaskForm";
import type { NewTaskProps } from "../../type";

/**
 * A container that holds a form for adding a new task.
 *
 * This component displays a section title and a TaskForm component that
 * allows users to create and submit new tasks.
 *
 * @param props - The component props
 * @param props.onAddTask - Callback function that is triggered when a new task is added
 * @returns A React functional component that renders the new task form section
 */
const NewTask: React.FC<NewTaskProps> = ({ onAddTask }) => {
  return (
    <div className="new-task-container">
      <h2 className="section-title">Add New Task</h2>
      <TaskForm onSubmit={onAddTask} />
    </div>
  );
};

export default NewTask;
