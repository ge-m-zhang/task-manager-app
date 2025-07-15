import type { Task, TaskFormData } from "../type";

const STORAGE_KEY = "tasks";

/**
 * Loads tasks from browser's local storage.
 *
 * This function retrieves tasks saved in the browser's local storage
 * under a predefined storage key. It parses the JSON string and
 * converts string dates back to Date objects for each task.
 *
 * @returns {Task[]} An array of Task objects retrieved from local storage.
 * If no tasks are found or an error occurs, returns an empty array.
 *
 * @throws {Error} While errors are caught internally and logged to console,
 * no errors are thrown from this function.
 */
export const loadTasksFromStorage = (): Task[] => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      // Convert string dates back to Date objects
      return parsedTasks.map(
        (task: Omit<Task, "createdAt"> & { createdAt: string }) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        })
      );
    }
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
  }
  return [];
};

/**
 * Saves an array of Task objects to local storage.
 *
 * @param tasks - The array of Task objects to be saved
 * @returns void
 *
 * @throws Will not throw errors directly, but logs to console if localStorage operation fails
 */
export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

/**
 * Creates a new Task object from the provided task form data.
 *
 * @param taskData - The form data containing task information
 * @returns A new Task object with generated ID and creation timestamp
 */
export const createNewTask = (taskData: TaskFormData): Task => {
  return {
    id: Date.now().toString(), // todo: Generate a unique ID, eg, with uuid etc
    title: taskData.title,
    description: taskData.description,
    priority: taskData.priority,
    completed: false,
    createdAt: new Date(),
  };
};
