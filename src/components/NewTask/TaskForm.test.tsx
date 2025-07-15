import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
  it('calls onSubmit with correct data and resets fields', () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Task Title/i), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText(/Priority/i), { target: { value: 'high' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      title: 'Test Task',
      description: 'Test Description',
      priority: 'high',
    });
    
    // Fields should be reset
    expect(screen.getByLabelText(/Task Title/i)).toHaveValue('');
    expect(screen.getByLabelText(/Description/i)).toHaveValue('');
    expect(screen.getByLabelText(/Priority/i)).toHaveValue('medium');
  });

  it('does not call onSubmit if title is empty', () => {
    const handleSubmit = jest.fn();
    // empty by default
    render(<TaskForm onSubmit={handleSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));
    expect(handleSubmit).not.toHaveBeenCalled();
  });
}); 