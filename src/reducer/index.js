import isSearch from "./is_search";
import searchReducer from "./search_data";
import { combineReducers } from "redux";

const allReducers = combineReducers({
     search: searchReducer,
     isSearch: isSearch
});

export default allReducers;