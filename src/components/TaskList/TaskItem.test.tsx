import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';
import type { Task } from '../../type';
import { useState } from 'react';

// mock data
const baseTask: Task = {
    id: '1',
    title: 'Sample Task',
    description: 'Details here',
    priority: 'medium',
    completed: false,
    createdAt: new Date(),
  };

// Helper to test checkbox toggling and strikethrough
const TaskItemWrapper = (props: Partial<Task>) => {
  const [completed, setCompleted] = useState(!!props.completed);
  return (
    <TaskItem
      task={{ ...baseTask, ...props, completed }}
      isExpanded={false}
      onToggle={() => setCompleted((c) => !c)}
      onDelete={jest.fn()}
      onToggleExpand={jest.fn()}
      index={0}
    />
  );
};

describe('TaskItem', () => {
  const setup = (overrides = {}) => {
    const task = { ...baseTask, ...overrides };
    const onToggle = jest.fn();
    const onDelete = jest.fn();
    const onToggleExpand = jest.fn();
    render(
      <TaskItem
        task={task}
        isExpanded={false}
        onToggle={onToggle}
        onDelete={onDelete}
        onToggleExpand={onToggleExpand}
        index={0}
      />
    );
    return { onToggle, onDelete, onToggleExpand };
  };

  it('renders task title and checkbox', () => {
    setup();
    expect(screen.getByText('Sample Task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('toggles strikethrough on title when checkbox is clicked', () => {
    render(<TaskItemWrapper completed={false} />);
    const checkbox = screen.getByRole('checkbox');
    const title = screen.getByText('Sample Task');
    expect(checkbox).not.toBeChecked();
    expect(title).not.toHaveClass('completed');
    
    fireEvent.click(checkbox);
    expect(title).toHaveClass('completed');
    fireEvent.click(checkbox);
    expect(title).not.toHaveClass('completed');
  });

  it('calls onDelete when delete button is clicked', () => {
    const { onDelete } = setup();
    fireEvent.click(screen.getByLabelText(/Delete task/i));
    expect(onDelete).toHaveBeenCalled();
  });

  it('calls onToggleExpand when expand button is clicked', () => {
    const { onToggleExpand } = setup();
    fireEvent.click(screen.getByLabelText(/Expand details/i));
    expect(onToggleExpand).toHaveBeenCalled();
  });

  it('shows description when expanded', () => {
    const task = { ...baseTask };
    render(
      <TaskItem
        task={task}
        isExpanded={true}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
        onToggleExpand={jest.fn()}
        index={0}
      />
    );
    expect(screen.getByText('Details here')).toBeInTheDocument();
  });
}); 