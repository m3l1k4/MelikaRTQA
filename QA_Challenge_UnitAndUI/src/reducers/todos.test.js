import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import todos from "./todos"

//each "todo" task can be in one of 2 possible states at any time. Either done or not done
// We need to test the switch statement recognizes a task as "complete" or "not complete" based on that task's ID and user's action
// We are going to test this with one task at a time, because that is how the todos reducer component is recieving commands

describe("todo reducer", () => {

    const test_id= 1;
    const test_text = 'sampleA';
    let test_compelete= false;
    const actionTODO={ type: "ADD_TODO", id: test_id, text: test_text };
    const actionTOGGLE={ type: "TOGGLE_TODO", id: test_id, text: test_text };
    const stateA = [2];
    const state = [{id:test_id, text:test_text, completed:test_compelete}]

    // the default state i.e. when there are no tasks on the list
    it("should return default", () => {
        expect(todos(0, 0)).toBe(0);
    });

    // adding items to the list, they are by default not complete
    it("should return ADD_TODO", () => {

        expect(todos(stateA, actionTODO)).toEqual([2,{ completed: test_compelete , id: test_id, text: test_text }])
    });

    // crossing off items from the list
    it("toggles task to completed" ,() =>{

        expect(todos(state, actionTOGGLE)).toEqual([{id:test_id, text:test_text,completed:!test_compelete}])

    })
})


