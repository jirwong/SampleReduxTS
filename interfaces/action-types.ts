import { MessageObject } from "./message-interface";

// Interface for Action Types
export interface NumberActionType {
    type: string;
    amount: number;
}

export interface MessageActionType {
    type: string;
    messageObject : MessageObject
}