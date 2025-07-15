import React from "react";
import type { TaskActionsProps } from "../../type";

/**
 * Component that renders action buttons for a task item
 *
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.hasDescription - Whether the task has a description
 * @param {boolean} props.isExpanded - Whether the task details are expanded
 * @param {() => void} props.onDelete - Callback function to handle task deletion
 * @param {() => void} props.onToggleExpand - Callback function to toggle task expansion state
 * @returns {JSX.Element} The rendered task actions component
 */
const TaskActions: React.FC<TaskActionsProps> = ({
  hasDescription,
  isExpanded,
  onDelete,
  onToggleExpand,
}) => (
  <div className="task-actions">
    {hasDescription && (
      <button
        className="expand-button"
        onClick={onToggleExpand}
        aria-label={isExpanded ? "Collapse details" : "Expand details"}
      >
        {isExpanded ? "−" : "+"}
      </button>
    )}
    <button
      className="delete-button"
      onClick={onDelete}
      aria-label="Delete task"
    >
      ×
    </button>
  </div>
);

export default TaskActions;
