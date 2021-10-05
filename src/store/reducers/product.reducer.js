
import { SET_PRODUCTS , ADD_OR_EDIT_PRODUCT} from '../type';

export default function productReducer(state = [], action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload;
        case ADD_OR_EDIT_PRODUCT:
            let products = [];
            const newProduct = action.payload;

            // find and update product with the same id
            if (state.find(product => product.id === newProduct.id)) {
                products = state.map(product => product.id === newProduct.id ? {...product, ...newProduct} : product);
            } else {
                products = [ ...state, action.payload];
            }

            return products;
        default:
            return state.length ? state : [
                {
                    id          : 1,
                    price       : "10",
                    title       : "Sample Product",
                    image       : "data:image/jpeg;base64,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",
                    description : "This product is ultimate first sample product.",
                }, {
                    id          : 2,
                    price       : "20",
                    title       : "Sample Product 2",
                    image       : "data:image/jpeg;base64,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",
                    description : "This product is ultimate second sample product.",
                }, {
                    id          : 3,
                    price       : "40",
                    title       : "Sample Product 3",
                    description : "This product is ultimate third sample product.",
                }
            ];
    }
}