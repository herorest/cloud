import { MODIFY_COLUMN } from '../actions/column.js';

const initState = 0;

export default function column(state = initState, action) {
    switch (action.type) {
        case MODIFY_COLUMN:
            return action.column;
        default:
            return state;
    }
}
