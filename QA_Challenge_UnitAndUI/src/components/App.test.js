import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers'
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { toHaveStyle } from '@testing-library/jest-dom'
import  App  from "./App";
const store = createStore(rootReducer)
const MyAppWithStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
test('check render without crashing', () => {
  const div = document.createElement('div');
 ReactDOM.render(<MyAppWithStore />, div);
  ReactDOM.unmountComponentAtNode(div);
});