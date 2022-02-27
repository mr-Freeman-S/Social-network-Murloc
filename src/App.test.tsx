import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addNewMessage, RootStateType} from "./redux/state";

test('renders learn react link', () => {
  const state = {} as RootStateType;
  render(<App addNewMessage={addNewMessage} {...state} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
