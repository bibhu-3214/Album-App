import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import albumReducer from '../Reducer/albumReducer';
import photoReducer from '../Reducer/photoReducer';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            albums: albumReducer,
            photos: photoReducer,
        }),
        applyMiddleware(thunk),
    );
    return store;
};

export default configureStore;
