import { SET_SITE } from './types';

export const setSite = site => dispatch => {
    dispatch({ type: SET_SITE, payload: site });
};
