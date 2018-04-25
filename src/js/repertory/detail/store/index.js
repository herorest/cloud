import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger'
import rootReducer from '../reducers';

//支持 DevTools
// import DevTools from '../../common/DevTools'
// const finalCreateStore = compose(
//     applyMiddleware(logger,thunk)
//     // DevTools.instrument()
// )(createStore);

// thunk
const finalCreateStore = applyMiddleware(logger,thunk)(createStore);
export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
