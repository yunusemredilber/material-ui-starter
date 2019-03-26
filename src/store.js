import {applyMiddleware, compose, createStore} from "redux";

import thunk from "redux-thunk";

import {rootReducer} from "./reducers/rootReducer";

import reduxPromise from 'redux-promise-middleware';

const allEnhancers = compose(
    applyMiddleware(reduxPromise,thunk)/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);

export const store = createStore(
    rootReducer,
    allEnhancers
);