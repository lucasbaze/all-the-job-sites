//
// CONSTANTS
//

export const TOGGLE_ALL = 'atjs/category/toggle_all';
export const OPEN_ALL = 'atjs/category/open_all';
export const CLOSE_ALL = 'atjs/category/close_all';

//
//REDUCER
//

export default function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_ALL:
            return {
                ...state,
                all: !state.all,
            };
        case OPEN_ALL:
            return {
                ...state,
                all: true,
            };
        case CLOSE_ALL:
            return {
                ...state,
                all: false,
            };
        default:
            return state;
    }
}

//
// ACTION CREATORS
//

export const toggleAll = dispatch => {
    console.log('Toggling all categories');

    dispatch({
        type: TOGGLE_ALL,
    });
};

export const openCloseAll = (dispatch, open) => {
    if (open) {
        dispatch({
            type: OPEN_ALL,
        });
    } else {
        dispatch({
            type: CLOSE_ALL,
        });
    }
};
