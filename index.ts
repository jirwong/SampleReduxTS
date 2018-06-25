import {
    Store,
    combineReducers,
    createStore,
    Reducer,
    ActionCreator
} from "redux";

import { mainReducer } from "./reducers/main-reducer";
import { addNumber, minusNumber } from "./actions/number-actions";
import { addMessage, removeMessage, updateMessage } from "./actions/message-actions";

const store: Store = createStore(mainReducer);

// subscribe to store changes for debugging
store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch(addNumber(10));
//store.dispatch(minusNumber(20));
store.dispatch(addMessage("hello"));
store.dispatch(addMessage("hello another"));
store.dispatch(addMessage("hello another 2"));

store.dispatch(removeMessage(2));

store.dispatch(addMessage("hello another 3"));
store.dispatch(addMessage("hello another 4"));

store.dispatch(addMessage("hello another 5"));

store.dispatch(addMessage("hello another 6"));

store.dispatch(updateMessage(3,'some updated message'));
