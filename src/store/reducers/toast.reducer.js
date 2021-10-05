
import { SET_TOAST } from '../type';

export default function toastReducer(state = false, action) {
    switch (action.type) {
        case SET_TOAST:
            return action.payload;
        default:
            return state;
    }
}