//
// CONSTANTS
//

export const TOGGLE_ALL = 'atjs/category/toggle_all';

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
