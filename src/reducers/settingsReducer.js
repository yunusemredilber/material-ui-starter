// Action Type Imports
import {SET_SETTINGS} from "../actions/settings-actions";

const initialState = {
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        fontSize: 17,
    },
    palette : {
        primary: {
            light: '#9a67ea',
            main: '#673ab7',
            dark: '#320b86',
            //contrastText: '#fff',
        },
        secondary: {
            light: '#b085f5',
            main: '#7e57c2',
            dark: '#4d2c91',
            //contrastText: '#fff',
        },
        type: 'dark',
    },

};
// Settings Reducer
export default function settingsReducer(state=initialState, action) {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
