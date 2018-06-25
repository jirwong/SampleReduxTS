import { Store, Action, Middleware } from "redux";

export const logger : any = (store: Store) => (next: Function) => (action: any) => {
    //console.log('dispatching...', action);
    let result = next(action);
    //console.log('next state = ', store.getState());
    return result;
}