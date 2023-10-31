import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';
import '../src/i18n'

afterEach(cleanup);

test('renders the component with language flags', () => {

  render(
    <Router>
      <App />
    </Router>,
    );


  const brFlag = screen.getByAltText('Brazil Flag');
  const usFlag = screen.getByAltText('USA Flag');

  expect(brFlag).toBeInTheDocument();
  expect(usFlag).toBeInTheDocument();
});

test('switch the language of the app', () => {

  render(
    <Router>
      <App />
    </Router>,
    );


  const usFlag = screen.getByAltText('USA Flag');

  expect(usFlag).toBeInTheDocument();

  fireEvent.click(usFlag);

  
  const someElementWithEnglishText = screen.getByText('Brazilian Software House'); 

  expect(someElementWithEnglishText).toBeInTheDocument();
});

