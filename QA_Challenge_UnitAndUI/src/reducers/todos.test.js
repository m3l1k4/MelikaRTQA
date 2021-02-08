import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { toHaveStyle } from '@testing-library/jest-dom'

import todos from "./todos"
import { bindActionCreators } from "redux";


describe("todo reducer", () => {

    const actionTODO={ type: "ADD_TODO", id: 1, text: 'sampleA' };
    const actionTOGGLE={ type: "TOGGLE_TODO", id: 1, text: 'sampleA' };
    const stateA = [2];
    const state = [{id:1, text:'sampleA', completed:true}];

    it("should return default", () => {
        expect(todos(0, 0)).toBe(0);
    });

    it("should return ADD_TODO", () => {

        expect(todos(stateA, actionTODO)).toEqual([2,{ completed: false , id: 1, text: 'sampleA' }])
    });

    it("should return TOGGLE_TODO state false" ,() =>{

        expect(todos(state, actionTOGGLE)).toEqual([{id:1, text:'sampleA',completed:false}])

    })


})


