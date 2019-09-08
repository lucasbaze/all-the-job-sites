// import axios from 'axios';
import { SET_USER, FETCH_USER, UPDATE_SEARCH } from './types.js';

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
