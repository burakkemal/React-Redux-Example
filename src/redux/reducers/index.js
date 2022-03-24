import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const redusers = combineReducers({
  counterReducer,
});

export default redusers;
