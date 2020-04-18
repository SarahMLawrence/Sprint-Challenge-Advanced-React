import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


test('Renders h1', () => {
  const { getByText } = render(<App />);
  const title = getByText(/the players/i);
})