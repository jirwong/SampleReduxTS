import { NumberActionType } from '../interfaces/action-types';
import { ActionCreator } from 'redux';
import { ADD_NUMBER, MULTIPLY_NUMBER, MINUS_NUMBER } from '../constants';

// Add/Minus Actions
export let addNumber: ActionCreator<NumberActionType> = (
    x: number
): NumberActionType => {
    return {
        type: ADD_NUMBER,
        amount: x
    } as NumberActionType;
};

export let minusNumber: ActionCreator<NumberActionType> = (
    x: number
): NumberActionType => {
    return {
        type: MINUS_NUMBER,
        amount: x
    } as NumberActionType;
};

export let multiplyNumber: ActionCreator<NumberActionType> = (
    x: Number
): NumberActionType => {
    return {
        type: MULTIPLY_NUMBER,
        amount: x
    } as NumberActionType;
};