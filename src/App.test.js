import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import App from './App';

test('renders the component with language flags', () => {

  render(<Router>
    <App />
  </Router>);
  const { i18n } = useTranslation();

  const brFlag = screen.getByAltText('Brazil Flag');
  const usFlag = screen.getByAltText('USA Flag');

  expect(brFlag).toBeInTheDocument();
  expect(usFlag).toBeInTheDocument();
});

