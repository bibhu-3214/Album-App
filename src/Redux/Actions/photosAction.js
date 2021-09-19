import axios from 'axios';

export const getPhotos = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos`,
        })
            .then(resp => {
                const res = resp.data.slice(0, 10);
                console.log('~ res', res);
                dispatch(getPhotoItem(res));
            })
            .catch(err => {
                alert(err.message);
            });
    };
};

export const getPhotoItem = res => {
    return {
        type: 'GET_PHOTO_ITEM',
        payload: res,
    };
};

export const getPhotoById = id => {
    return dispatch => {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
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
        type: 'GETPHOTOBY_ID',
        payload: result,
    };
};
