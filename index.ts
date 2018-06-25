import {
    Store,
    combineReducers,
    createStore,
    Reducer,
    ActionCreator,
    applyMiddleware
} from "redux";

import { mainReducer } from "./reducers/main-reducer";
import { addNumber, minusNumber } from "./actions/number-actions";
import { addMessage, removeMessage, updateMessage, getAllMessages } from "./actions/message-actions";
import { logger } from "./middleware/logger";
import { ActionCreators } from "redux-undo";

const store: Store = createStore(mainReducer, applyMiddleware(logger) );

// subscribe to store changes for debugging
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addNumber(10));
store.dispatch(minusNumber(20));
store.dispatch(addMessage("hello"));
store.dispatch(addMessage("hello another"));
store.dispatch(addMessage("hello another 2"));

store.dispatch(removeMessage(2));

store.dispatch(addMessage("hello another 3"));
store.dispatch(addMessage("hello another 4"));

store.dispatch(addMessage("hello another 5"));

store.dispatch(addMessage("hello another 6"));

store.dispatch(updateMessage(3,'some updated message'));

console.log(store.getState());

//store.dispatch(ActionCreators.jump(-1));

//console.log(store.dispatch(getAllMessages()));
