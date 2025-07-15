import React, { useState } from "react";
import PrioritySelect from "./PrioritySelect";
import type { TaskFormProps, TaskFormData } from "../../type";

/**
 * A form component for creating new tasks.
 *
 * This component provides a form with fields for task title, description,
 * and priority selection. When submitted, it calls the provided onSubmit
 * function with the collected task data.
 *
 * @param props - The component props
 * @param props.onSubmit - Callback function that gets called when the form is submitted
 *                         with valid data. Receives a TaskFormData object.
 *
 */
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const taskData: TaskFormData = {
        title: title.trim(),
        description: description.trim(),
        priority,
      };
      onSubmit(taskData);
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-field">
        <label className="form-label" htmlFor="task-title">
          Task Title <span className="required">*</span>
        </label>
        <input
          id="task-title"
          className="form-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="task-desc">
          Description
        </label>
        <textarea
          id="task-desc"
          className="form-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <PrioritySelect
        value={priority}
        onChange={(priority) => setPriority(priority)}
      />
      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
