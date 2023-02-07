import { createStore } from "redux";
import RootReducers from "../Redux/reducers/RootReducers";

let store = createStore(RootReducers);

export default store;
