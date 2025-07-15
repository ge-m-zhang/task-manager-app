import { useState, useEffect } from "react";
import type { Task, TaskFormData } from "../type";
import {
  loadTasksFromStorage,
  saveTasksToStorage,
  createNewTask,
} from "../utils/taskUtils";

/**
 * Custom hook to manage tasks.
 * It handles loading, adding, toggling, and deleting tasks,
 * while persisting them in localStorage.
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = loadTasksFromStorage();
    setTasks(savedTasks);
    setIsInitialized(true); // Mark as initialized
  }, []);

  // Save tasks to localStorage whenever tasks change (but not on initial load)
  useEffect(() => {
    if (!isInitialized) return; // Skip saving until loaded from storage
    saveTasksToStorage(tasks);
  }, [tasks, isInitialized]);

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
