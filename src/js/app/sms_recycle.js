import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../repertory/sms_recycle/store';
import App from '../repertory/sms_recycle/components/app';

const store = configureStore();
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
