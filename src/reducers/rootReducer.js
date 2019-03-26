import {combineReducers} from "redux";

import homeReducer from "./homeReducer";
import settingsReducer from "./settingsReducer"

export const rootReducer = combineReducers({
    home:homeReducer,
    settings:settingsReducer
});