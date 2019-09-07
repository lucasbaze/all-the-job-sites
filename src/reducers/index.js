import { FETCH_USER, UPDATE_SEARCH } from '../actions/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            let cleanedSearch = action.payload.replace(/[^a-zA-Z 0-9]/g, '');

            return {
                ...state,
                searchValue: cleanedSearch,
            };

        case FETCH_USER:
            return {
                ...state,
                user: action.payload || false,
            };
        default:
            return state;
    }
};
