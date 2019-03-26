// Action Types
export const TEST = "TEST";

/* Home Page's Actions */

// Test Setter
export function setTest(test) {
    return dispatch => {
        dispatch({
            type: TEST,
            payload: test
        })
    };
}