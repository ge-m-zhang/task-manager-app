import { renderHook, act } from '@testing-library/react';
import { useTasks } from './useTasks';

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
  });

  it('adds a new task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({ title: 'Task 1', description: 'Desc', priority: 'low' });
    });
    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Task 1');
  });

  it('toggles a task completed status', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({ title: 'Task 2', description: '', priority: 'medium' });
    });
    const id = result.current.tasks[0].id;
    act(() => {
      result.current.toggleTask(id);
    });
    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('deletes a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask({ title: 'Task 3', description: '', priority: 'high' });
    });
    const id = result.current.tasks[0].id;
    act(() => {
      result.current.deleteTask(id);
    });
    expect(result.current.tasks).toHaveLength(0);
  });
}); 