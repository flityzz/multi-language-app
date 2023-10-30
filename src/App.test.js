import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

test('renders the component with language flags', () => {
  render(<App />);
  
  const brFlag = screen.getByAltText('Brazil Flag');
  const usFlag = screen.getByAltText('USA Flag');

  expect(brFlag).toBeInTheDocument();
  expect(usFlag).toBeInTheDocument();
});

