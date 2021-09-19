import axios from 'axios';

export const getAlbums = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/albums',
        })
            .then(resp => {
                const res = resp.data.slice(0, 5);
                dispatch(getAlbumItem(res));
            })
            .catch(err => {
                alert(err.message);
            });
    };
};

export const getAlbumItem = res => {
    return {
        type: 'GET_ITEM',
        payload: res,
    };
};

export const getItemById = id => {
    return dispatch => {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/albums/${id}`,
        })
            .then(resp => {
                const result = resp.data;
                dispatch(getById(result));
            })
            .catch(err => {
                alert(err.message);
            });
    };
};

export const getById = result => {
    return {
        type: 'GETBY_ID',
        payload: result,
    };
};
