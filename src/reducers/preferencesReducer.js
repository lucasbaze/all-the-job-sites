import _ from 'lodash';
import firebase from '../firebase';

const db = firebase.firestore();
//
//Constants
//

export const SET_PREFERENCE = 'atjs/preferences/set_preference';
export const ADD_PREFERENCE = 'atjs/prefernces/add_preference';
export const DELETE_PREFERENCE = 'atjs/prefernces/delete_preference';

//
//Reducer
//

export default function reducer(state, action) {
    switch (action.type) {
        case SET_PREFERENCE:
            return {
                ...state,
                ...action.payload,
            };
        case ADD_PREFERENCE:
            return {
                ...state,
                ...action.payload,
            };
        case DELETE_PREFERENCE:
            return {
                state,
                ...action.payload,
            };
        default:
            return state;
    }
}

//
//Actions
//

export const setPreferences = (dispatch, preferences) => {
    console.log('Setting user preferences');

    dispatch({
        type: SET_PREFERENCE,
        payload: preferences,
    });
};

export const addPreference = async (dispatch, preferences, value, uid) => {
    console.log('Starting to add new preference with values', value);
    console.log(preferences);

    let index = Object.keys(value)[0];
    let array = preferences[index];

    array.push(Object.values(value)[0]);

    console.log(preferences);

    let docRef = await db
        .collection('users')
        .doc(`${uid}`)
        .update({
            preferences: preferences,
        })
        .then(() => {
            console.log('Successfully updated preferences');
        })
        .catch(err => {
            console.log('Error saving preferences');
        });

    console.log(array);

    dispatch({
        type: ADD_PREFERENCE,
        payload: preferences,
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
