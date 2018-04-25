import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({
    timestamp:false,
    diff:true,
    collapsed:true
});

const finalCreateStore = applyMiddleware(logger,thunk)(createStore);
export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
