import reqwest from 'reqwest';
import Model from '../../common/interface';

export const MODIFY_COLUMN = 'modify_column';

export function modifyColumn(column) {
    return {
        type: MODIFY_COLUMN,
        column
    }
}
