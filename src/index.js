import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
