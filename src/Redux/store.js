import { createStore, compose } from "redux";
import rootReducer from "./Reducers";

var composeEnhancers = compose;

export default createStore(rootReducer, composeEnhancers());


