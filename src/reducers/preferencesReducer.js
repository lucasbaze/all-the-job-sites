import _ from 'lodash';
//
//Constants
//

export const ADD_PREFERENCE = 'atjs/prefernces/add_preference';
export const DELETE_PREFERENCE = 'atjs/prefernces/delete_preference';

//
//Reducer
//

export default function reducer(state, action) {
    switch (action.type) {
        case ADD_PREFERENCE:
            return {
                ...state,
                ...action.payload,
            };
        case DELETE_PREFERENCE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

//
//Actions
//

export const addPreference = (dispatch, preferences, value) => {
    console.log('Starting to add new preference with values', value);
    console.log(preferences);

    let index = Object.keys(value)[0];
    let array = preferences[`${index}s`];

    array.push(Object.values(value)[0]);

    console.log(array);
    dispatch({
        type: ADD_PREFERENCE,
        payload: array,
    });
};

export const deletePreference = (dispatch, preferences, value) => {
    console.log('Removing preference', value);

    let index = Object.keys(value)[0];
    console.log(index);

    _.remove(preferences[index], item => {
        return item == Object.values(value)[0];
    });

    console.log(preferences);

    dispatch({
        type: DELETE_PREFERENCE,
        payload: preferences,
    });
};
