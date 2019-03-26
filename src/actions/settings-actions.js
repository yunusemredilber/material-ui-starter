// Action Types
export const SET_SETTINGS = "SET_SETTINGS";

/* Settings Actions */

// Settings Setter
export function setSettings(settings) {
    return dispatch => {
        dispatch({
            type: SET_SETTINGS,
            payload: settings
        })
    };
}