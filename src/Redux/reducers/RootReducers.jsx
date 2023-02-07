import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import LocalReducer from "./LocalReducer";



let RootReducers = combineReducers({
    table:tableReducer,
})

export default RootReducers