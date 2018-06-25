import { ADD_MESSAGE, REMOVE_MESSAGE, UPDATE_MESSAGE, GET_ALL_MESSAGES } from "../constants";
import { MessageActionType } from "../interfaces/action-types";
import { MessageObject } from "../interfaces/message-interface";


export let addMessage = (msg: string): MessageActionType => {
    return {
        type: ADD_MESSAGE,
        messageObject: { message: msg, id: 0 }
    }
}

export let removeMessage = (msgid: number): MessageActionType => {
    return {
        type: REMOVE_MESSAGE,
        messageObject: { id: msgid, message: '' }
    }
}

export let updateMessage = (msgid: number, msgcontent : string) : MessageActionType => {
    return {
        type: UPDATE_MESSAGE,
        messageObject: { id: msgid, message: msgcontent }
    }
}

export let getAllMessages = () : MessageActionType => {
    return {
        type: GET_ALL_MESSAGES
    }
}