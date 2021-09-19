const albumInitialState = [];

const albumReducer = (state = albumInitialState, action) => {
    switch (action.type) {
        case 'GET_ITEM': {
            return [...action.payload];
        }
        case 'GETBY_ID': {
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

export default albumReducer;
