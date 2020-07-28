import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import rootDeducer from "./redux/rootReducer";



const loggerMiddleware = store => next => action => {
    const result = next(action);

    console.log('mid',store.getState())
    return result
}

const store = createStore(rootDeducer, applyMiddleware(loggerMiddleware))

const app = (
    <Provider store={store}>
        <App title={'i am from props'} />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
