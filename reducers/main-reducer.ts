import { Reducer, combineReducers } from "redux";
import { baseTotal } from "./number-reducer";
import { baseMessages } from "./message-reducer";

export const mainReducer: Reducer = combineReducers({ baseTotal, baseMessages });