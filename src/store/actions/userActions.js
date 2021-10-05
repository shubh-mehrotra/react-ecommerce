import { SET_ADMIN_USER, SET_CUSTOMER_USER } from "../type";

export const setCustomer = value => {
    localStorage.setItem("isCustomerLoggedIn", value);

    return {
        type: SET_CUSTOMER_USER,
        payload: value
    }
}

export const setAdmin = value => {
    localStorage.setItem("isAdminLoggedIn", value);

    return {
        type: SET_ADMIN_USER,
        payload: value
    }
}