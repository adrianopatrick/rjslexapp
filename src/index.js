import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import reducers from './rootReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('app'));
registerServiceWorker();
