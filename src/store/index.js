import toastReducer from './reducers/toast.reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const allReducers = combineReducers({
    toast: toastReducer
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;