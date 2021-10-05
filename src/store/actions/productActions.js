import { SET_PRODUCTS, ADD_OR_EDIT_PRODUCT } from "../type";

export function setProducts(value) {
    return {
        type: SET_PRODUCTS,
        payload: value,
    }
}

export function addProduct(value) {
    return {
        type: ADD_OR_EDIT_PRODUCT,
        payload: value,
    }
}