
import { SET_GLOBAL_DETAILS } from '../type';

export default function globalReducer(state = {}, action) {
    switch (action.type) {
        case SET_GLOBAL_DETAILS:
            return action.payload;
        default:
            return {
                currencySymbol: "$",
            };
    }
}