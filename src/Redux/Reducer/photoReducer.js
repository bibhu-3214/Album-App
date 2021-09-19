const photoInitialState = [];

const photoReducer = (state = photoInitialState, action) => {
    switch (action.type) {
        case 'GET_PHOTO_ITEM': {
            return [...action.payload];
        }
        case 'GETPHOTOBY_ID': {
            return state.map(ele => {
                if (ele._id === action.payload._id) {
                    return { ...action.payload };
                } else {
                    return { ...ele };
                }
            });
        }
        default: {
            return [...state];
        }
    }
};

export default photoReducer;
