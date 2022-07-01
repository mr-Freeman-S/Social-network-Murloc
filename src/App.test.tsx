import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {StoreType} from "./redux/store";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

/*
test('renders learn react link', () => {

  render( <Provider store={store}><App  /> </Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
