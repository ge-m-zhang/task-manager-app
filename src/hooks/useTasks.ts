import { useState, useEffect } from "react";
import type { Task, TaskFormData } from "../type";
import {
  loadTasksFromStorage,
  saveTasksToStorage,
  createNewTask,
} from "../utils/taskUtils";

/**
 * Custom hook for managing tasks with local storage persistence.
 *
 * This hook provides functionality to:
 * - Load tasks from localStorage when the component mounts
 * - Save tasks to localStorage whenever they change
 * - Add new tasks
 * - Toggle task completion status
 * - Delete tasks
 *
 * @returns {Object} An object containing:
 *   - tasks: Array of current Task objects
 *   - addTask: Function to add a new task
 *   - toggleTask: Function to toggle a task's completed status
 *   - deleteTask: Function to remove a task
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = loadTasksFromStorage();
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (taskData: TaskFormData) => {
    const newTask = createNewTask(taskData);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
};
