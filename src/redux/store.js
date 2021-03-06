import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore( 
    reducers, 
    initialState, 
    compose( applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
    )
);

export default store;
