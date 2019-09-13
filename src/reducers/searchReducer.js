export const UPDATE_SEARCH = 'atjs/update_search';

export default function reducer(state, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
}
