import { legacy_createStore } from "redux";
import myReducer from "./reducer";

const myStore = legacy_createStore(myReducer);

export default myStore;
