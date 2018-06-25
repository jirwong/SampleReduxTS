import { Reducer } from "redux";
import { NumberActionType } from "../interfaces/action-types";
import { ADD_NUMBER, MINUS_NUMBER, MULTIPLY_NUMBER } from "../constants";

// Reducers
export let baseTotal: Reducer<number, NumberActionType> = (state: number = 0, action: NumberActionType) => {
    switch (action.type) {
        case ADD_NUMBER:
            return state + action.amount;
        case MINUS_NUMBER:
            return state - action.amount;
        case MULTIPLY_NUMBER:
            return state * action.amount;
        default:
            return state;
    }
};