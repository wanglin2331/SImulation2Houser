import {createStore, applyMiddleware } from "redux";
import reduxPromiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers/reducer';

const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxPromiseMiddleware())
);

export default store;