import { Reducer, combineReducers, applyMiddleware } from "redux";
import { baseTotal } from "./number-reducer";
import { baseMessages } from "./message-reducer";
import undoable from 'redux-undo';

export const mainReducer: Reducer = combineReducers({
    // Uncomment the below for redux undo
    //baseTotal : undoable(baseTotal),
    //baseMessages : undoable(baseMessages)
    baseTotal, baseMessages
});