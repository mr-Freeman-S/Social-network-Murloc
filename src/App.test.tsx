import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreType} from "./redux/state";

test('renders learn react link', () => {
  const store = {} as StoreType;
  render(<App store={store} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
