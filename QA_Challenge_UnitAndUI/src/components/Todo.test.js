import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import {render, fireEvent, waitFor, screen} from "@testing-library/react";
import { toHaveStyle } from '@testing-library/jest-dom'
import { App } from "./App";
import Todo from "./Todo"
import {TodoList} from "./TodoList"



const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
)

test('check strikethrough on click for list items', async() => {

const handleClick = jest.fn();
const textsample = "potato";
const compstatus = true;
const{getByText}=render(<Todo onClick={handleClick} completed={compstatus} text={textsample} ></Todo>)
expect(getByText("potato")).toHaveStyle('textDecoration: line-through')
})