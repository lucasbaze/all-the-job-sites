import firebase from '../firebase.js';
import { SET_USER_JOBS } from './jobsReducer';
import { setPreferences } from './preferencesReducer';

//
//CONFIG
//

const db = firebase.firestore();

//
// CONSTANTS
//

export const SET_USER = 'atjs/user/set_user';
export const SET_ONBOARD_COMPLETE = 'atjs/user/set_onboard_complete';
//
//REDUCER
//

export default function userReducer(state, action) {
    let payload = action.payload;
    switch (action.type) {
        case SET_USER:
            return {
                ...payload,
            };
        case SET_ONBOARD_COMPLETE:
            return {
                ...state,
                onboardComplete: payload,
            };
        default:
            return state;
    }
}

//
// ACTION CREATORS
//

export const setUser = (dispatch, user) => {
    console.log('Setting user', user);

    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const setOnboardComplete = (dispatch, complete) => {
    dispatch({
        type: SET_ONBOARD_COMPLETE,
        payload: complete,
    });
};

export const getOrCreateUserDBRecord = (dispatch, user) => {
    let { displayName, email, photoURL, uid, emailVerified } = user;

    //Get the user
    db.collection('users')
        .doc(`${uid}`)
        .get()
        .then(doc => {
            if (doc.exists) {
                console.log(
                    'Found User. Setting Saved Preferences',
                    doc.data()
                );
                let data = doc.data();

                setPreferences(dispatch, data.preferences);
                setOnboardComplete(dispatch, data.onboardComplete);

                //Get the users saved jobs and save to global state
                console.log('Found User. Getting Saved Jobs ');
                db.collection('users')
                    .doc(`${uid}`)
                    .collection('saved_jobs')
                    .get()
                    .then(querySnapshot => {
                        let savedJobs = [];
                        querySnapshot.forEach(documentSnapshot => {
                            savedJobs.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.ref.path,
                            });
                        });
                        console.log('Setting saved jobs to state');
                        dispatch({
                            type: SET_USER_JOBS,
                            payload: savedJobs,
                        });
                    });
            } else {
                console.log('No such user record. Creating record now');

                //Create the user in the database
                db.collection('users')
                    .doc(`${uid}`)
                    .set({
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL,
                        uid: uid,
                        emailVerified: emailVerified,
                        onboardComplete: false,
                    })
                    .then(() => {
                        //Create new collection inside the new user
                        console.log(
                            'Created new record. Creating new subcollection "savedJobs"'
                        );
                        db.collection('users')
                            .doc(`${uid}`)
                            .collection('saved_jobs')
                            .add({
                                link:
                                    'https://www.notion.so/All-The-Job-Sites-f8fc1bfadda749dcaa75e4d973d0d6bc',
                                name: 'Your First Saved Job!',
                                createDate: new Date(),
                                status: 'new',
                            });

                        dispatch({
                            type: SET_USER_JOBS,
                            payload: [
                                {
                                    key: 'my-first-job',
                                    link:
                                        'https://www.notion.so/All-The-Job-Sites-f8fc1bfadda749dcaa75e4d973d0d6bc',
                                    name: 'Your First Saved Job!',
                                    createDate: new Date(),
                                    status: 'new',
                                },
                            ],
                        });
                    })
                    .catch(err => {
                        console.log('Error setting new user: ', err);
                        return false;
                    });
            }
        })
        .catch(err => {
            console.log('Error getting document: ', err);
            return false;
        });
};

export const onboardComplete = (dispatch, { uid }) => {
    //No need to wait for DB
    setOnboardComplete(dispatch, true);

    db.collection('users')
        .doc(`${uid}`)
        .update({
            onboardComplete: true,
        })
        .then(() => {
            console.log('Successfully complete onboarding');
        })
        .catch(err => {
            console.log('Error completing onboarding', err);
        });
};
