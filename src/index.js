import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import rootDeducer from "./redux/rootReducer";
import reduxThunk from 'redux-thunk'



const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const loggerMiddleware = store => next => action => {
    const result = next(action);

    console.log('mid',store.getState())
    return result
}


const store = createStore(rootDeducer,composeEnhancers(applyMiddleware(loggerMiddleware,reduxThunk)))

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
