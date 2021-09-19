import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Redux/Store/albumStore';
import { Provider } from 'react-redux';
import { getAlbums } from './Redux/Actions/albumAction';
import { getPhotos } from './Redux/Actions/photosAction';

const store = configureStore();
console.log('state', store.getState());

store.subscribe(() => {
    console.log('state update', store.getState());
});

store.dispatch(getAlbums());
store.dispatch(getPhotos());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
