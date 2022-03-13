import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store, StoreType} from "./redux/state";

test('renders learn react link', () => {
  const store = {} as StoreType;
  render(<App state={store.getState()} dispatch={store.dispatch}  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
