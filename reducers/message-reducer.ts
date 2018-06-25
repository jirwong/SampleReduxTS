import { MessageObject } from "../interfaces/message-interface";
import { Reducer } from "redux";
import { MessageActionType } from "../interfaces/action-types";
import { ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE } from "../constants";

export let baseMessages = (state: Array<MessageObject> = [], action: MessageActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state = [...state, (<any>Object).assign({}, action.messageObject, { id: state.reduce((acc, v) => v.id > acc ? v.id + 1 : acc+1, 1) })];
            return state;
        case REMOVE_MESSAGE:
            return [...state].filter(m => m.id !== action.messageObject.id);
        case UPDATE_MESSAGE:
            return [...state].map(m => {
                if (m.id == action.messageObject.id) {
                    return (<any>Object).assign({}, action.messageObject, { message: action.messageObject.message });
                }
                return m;
            });
        default:
            return state;
    }


}