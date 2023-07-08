import searchReducer from "./search_data";
import { combineReducers } from "redux";

const allReducers = combineReducers({
     search: searchReducer
});

export default allReducers;