import { createStore, combineReducers } from "redux";
import { Reduser } from "./Reduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReduserModalState } from "./ReduserModalState";

const rootReduser = combineReducers({
  Reduser,
  ReduserModalState,
});
export const store = createStore(rootReduser, composeWithDevTools());
