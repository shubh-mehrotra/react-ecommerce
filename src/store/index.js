import toastReducer from './reducers/toast.reducer';
import productReducer from './reducers/product.reducer';
import globalReducer from './reducers/global.reducer';
import { customerReducer, adminReducer } from './reducers/user.reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const allReducers = combineReducers({
    toast    : toastReducer,
    admin    : adminReducer,
    customer : customerReducer,
    products : productReducer,
    global   : globalReducer,
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;