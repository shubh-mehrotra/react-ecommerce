import { SET_GLOBAL_DETAILS } from "../type";

export function setGlobalDetails(value) {
    return {
        type: SET_GLOBAL_DETAILS,
        payload: value,
    }
}