import { applyMiddleware, createStore, compose  } from 'redux';
import rootReducer from './reducers';
import logger  from 'redux-logger';

let middlewares = [logger];

export default () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))        
    )
}