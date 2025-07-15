import React from "react";
import type { TaskItemProps } from "../../type";
import TaskActions from "./TaskActions";

const TaskItem: React.FC<TaskItemProps> = ({ task, isExpanded, onToggle, onDelete, onToggleExpand, index }) => {
  return (
    <div className={`task-item priority-${task.priority}`}>
      <div className="task-row">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <span className="task-number" style={{ color: '#111' }}>{(index ?? 0) + 1}.</span>
       
        <h3 className={`task-title${task.completed ? ' completed' : ''}`}>{task.title}</h3>
        <TaskActions
          hasDescription={!!task.description}
          isExpanded={isExpanded}
          onDelete={() => onDelete(task.id)}
          onToggleExpand={() => onToggleExpand(task.id)}
        />
      </div>
      {(isExpanded && task.description) && (
        <p className="task-description">{task.description}</p>
      )}
    </div>
  );
};

export default TaskItem;
