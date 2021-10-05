import { SET_ADMIN_USER, SET_CUSTOMER_USER } from "../type";

export function customerReducer(state = false, action) {
    switch (action.type) {
        case SET_CUSTOMER_USER:
            return action.payload;
        default:
            return localStorage.getItem("isCustomerLoggedIn");
    }
}

export function adminReducer(state = false, action) {
    switch (action.type) {
        case SET_ADMIN_USER:
            return action.payload;
        default:
            return localStorage.getItem("isAdminLoggedIn");
    }
}