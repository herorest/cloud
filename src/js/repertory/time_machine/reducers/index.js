import { combineReducers } from 'redux';

import timeline from './timeline';
import detail from './detail';
import hover from './hoverBox';

const rootReducer = combineReducers({
    timeline,
    detail,
    hover
})

module.exports = rootReducer;
