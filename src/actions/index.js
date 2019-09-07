// import axios from 'axios';
import { FETCH_USER, UPDATE_SEARCH } from './types.js';

export const fetchUser = dispatch => {
    // axios.get('/api/current_user').then(response => {
    //     console.log('Line 106:', response.data);
    //     dispatch({ type: FETCH_USER, payload: response.data });
    // });
};

export const updateSearch = (dispatch, value) => {
    console.log('Updating Search Value');

    dispatch({
        type: UPDATE_SEARCH,
        payload: value,
    });
};
