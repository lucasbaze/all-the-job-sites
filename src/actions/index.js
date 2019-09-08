// import axios from 'axios';
import { SET_USER, FETCH_USER, UPDATE_SEARCH } from './types.js';

export const fetchUser = dispatch => {
    // axios.get('/api/current_user').then(response => {
    //     console.log('Line 106:', response.data);
    //     dispatch({ type: FETCH_USER, payload: response.data });
    // });
};

export const setUser = (dispatch, user) => {
    console.log('Setting user', user);

    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const updateSearch = (dispatch, value) => {
    console.log('Updating Search Value');

    dispatch({
        type: UPDATE_SEARCH,
        payload: value,
    });
};
