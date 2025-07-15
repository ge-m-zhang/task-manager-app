// ============================================================================
// CORE DOMAIN TYPES
// ============================================================================

/**
 * Main task object representing a user's task
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}

/**
 * Priority levels for tasks
 * Used for color coding and visual hierarchy
 */
export type Priority = "low" | "medium" | "high";

/**
 * Form data structure for creating new tasks
 * Used in NewTask component form submission
 */
export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

/**
 * Props for the NewTask component
 * Handles task creation form
 */
export interface NewTaskProps {
  onAddTask: (taskData: TaskFormData) => void;
}

/**
 * Props for the TaskForm component
 * Form logic and validation
 */
export interface TaskFormProps {
  onSubmit: (taskData: TaskFormData) => void;
}

/**
 * Props for the TaskList component
 * Main task display container
 */
export interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

/**
 * Props for individual TaskItem component
 * Single task display and interactions
 */
export interface TaskItemProps {
  task: Task;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleExpand: (id: string) => void;
  index?: number;
}

/**
 * Props for TaskActions component
 * Action buttons (expand/delete)
 */
export interface TaskActionsProps {
  hasDescription: boolean;
  isExpanded: boolean;
  onDelete: () => void;
  onToggleExpand: () => void;
}

// ============================================================================
// FORM & UI TYPES
// ============================================================================

/**
 * Priority select dropdown props
 */
export interface PrioritySelectProps {
  value: Priority;
  onChange: (priority: Priority) => void;
}
