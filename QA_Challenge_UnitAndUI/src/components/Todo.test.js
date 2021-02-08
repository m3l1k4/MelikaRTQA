import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { toHaveStyle } from '@testing-library/jest-dom'
import { App } from "./App";
import Todo from "./Todo"
import { TodoList } from "./TodoList"

//this component striks through text when clicked on

//using test, tests one time for the text decoration style in event of complete status
// this is short and requires few lines, but it is not testing for the case of text decoration being "none"
test('check strikethrough on click for list items', () => {
  const handleClick = jest.fn();
  const textsample = "potato";
  const compstatus = true;
  const { getByText } = render(<Todo onClick={handleClick} completed={compstatus} text={textsample} ></Todo>)
  expect(getByText("potato")).toHaveStyle('textDecoration: line-through')
})

//using describe, performs both complete and not complete status tests
// im pretty sure there is a better way to write this so we're not repeating the render statement
describe("todo strikethrough", () => {
  const handleClick = jest.fn();
  const textsample = "potato";
  const compstatus = false;
  it("tasks should not be striked by default", () => {
    const { getByText } = render(<Todo onClick={handleClick} completed={compstatus} text={textsample} ></Todo>)
    expect(getByText(textsample)).toHaveStyle('textDecoration: none')
  });
  it("text strikethrough on click", () =>{
    const { getByText } = render(<Todo onClick={handleClick} completed={!compstatus} text={textsample} ></Todo>)
    expect(getByText(textsample)).toHaveStyle('textDecoration: line-through')
  });
  
})