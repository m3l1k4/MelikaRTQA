import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from './Todo';


import {App} from "./App";

test ("renders correct content", () => {

  //renders a react component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

//Use DOM APIs ( Queryselector) to make assertions

});


