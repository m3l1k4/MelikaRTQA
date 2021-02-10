import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers'
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import  App  from "./App";
const store = createStore(rootReducer)
const MyAppWithStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
test('check render without crashing', () => {

    
  render(<MyAppWithStore />);
  const textElement = screen.getByText("Add Todo");
  expect(textElement).toBeInTheDocument();
});