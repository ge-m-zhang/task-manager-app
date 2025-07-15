import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Manager title and outstanding count', () => {
  render(<App />);
  expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();
  expect(screen.getByText(/Outstanding:/i)).toBeInTheDocument();
}); 