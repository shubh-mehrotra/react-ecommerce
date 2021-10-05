import { SET_TOAST } from "../type";

export function setToast(value) {
    return {
        type: SET_TOAST,
        payload: value,
    }
}