// Action Type Imports
import {TEST} from "../actions/home-actions";

const initialState = {
    test:0 // Test data
};
// Home Page's Reducer
export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                test:action.payload
            };

        default:
            return {...state};
    }
};



