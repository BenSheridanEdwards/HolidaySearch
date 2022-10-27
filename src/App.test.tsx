import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app without error', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  screen.getByRole('heading');
});
