export const UPDATE_SEARCH = 'atjs/search/update_search';

export default function reducer(state, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return action.payload;
        default:
            return state;
    }
}

export const updateSearch = (dispatch, value) => {
    console.log('Updating Search Value');

    let cleanedSearch = value.replace(/[^a-zA-Z 0-9]/g, '');

    dispatch({
        type: UPDATE_SEARCH,
        payload: cleanedSearch,
    });
};
