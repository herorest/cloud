import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = applyMiddleware(logger,thunk)(createStore);
export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
