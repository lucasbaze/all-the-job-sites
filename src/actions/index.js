// import axios from 'axios';
import {
    SET_USER,
    FETCH_USER,
    UPDATE_SEARCH,
    SET_USER_JOBS,
    UPDATE_SAVED_JOBS,
    ADD_SAVED_JOB,
} from './types.js';
import firebase from '../firebase.js';
import _ from 'lodash';

const db = firebase.firestore();

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

export const addNewSavedJob = async (dispatch, savedJobs, job, uid) => {
    console.log('saving new job to DB');

    let docRef = await db
        .collection('users')
        .doc(`${uid}`)
        .collection('saved_jobs')
        .add({
            link: job.link,
            name: job.name,
            createDate: new Date(),
            status: 'new',
        })
        .then(docRef => {
            console.log('Succesfully added new job');
            return docRef;
        })
        .catch(err => {
            console.log('Error saving job: ', err);
        });

    console.log('Updating Saved Jobs state');

    job.status = 'new';
    job.createDate = new Date();

    //Set the job key as the entire path
    //docRef is parsed out in order to update
    job.key = `users/${uid}/saved_jobs/` + docRef.id;

    console.log(job);

    savedJobs.push(job);

    dispatch({
        type: ADD_SAVED_JOB,
        payload: savedJobs,
    });
};

export const updateSavedJob = (dispatch, uid, savedJobs, key, value) => {
    console.log('Updating Job');

    //get the savedjob
    let job = _.find(savedJobs, { key: key });
    job.status = value;
    console.log('update jobs', job);
    savedJobs = [...savedJobs];
    console.log('update jobs', savedJobs);
    dispatch({
        type: UPDATE_SAVED_JOBS,
        payload: savedJobs,
    });

    //Remove everything before saved_jobs/ from key
    //key is the document path
    //key looks like users/wD0GWSkyezNfAPQxgr8IjwMfP583/saved_jobs/VuGJ5M69AwyCHjoMese
    let jobKey = key.substring(key.indexOf('saved_jobs/') + 11);

    console.log(jobKey);

    db.collection('users')
        .doc(`${uid}`)
        .collection('saved_jobs')
        .doc(`${jobKey}`)
        .update({
            status: value,
        })
        // .get()
        .then(() => {
            //console.log(doc.data());
            console.log('Succesfully updated Job');
        })
        .catch(err => {
            console.error('Error updating job', err);
        });
};

export const deleteSavedJob = (dispatch, job, uid) => {
    console.log('deleting job');

    db.collection('users')
        .doc(`${uid}`)
        .collection('saved_job')
        .doc(`${job.key}`)
        .delete()
        .then(() => {
            console.log('Job Succesfully deleted');
        })
        .catch(err => {
            console.error('Error deleting job: ', err);
        });
};

export const getUserSavedJobs = (dispatch, user) => {
    console.log('Getting user Jobs');

    db.collection('users')
        .doc(`${user.uid}`)
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
};

export const getOrCreateUserDBRecord = (dispatch, user) => {
    let { displayName, email, photoURL, uid, emailVerified } = user;

    //Get the user
    db.collection('users')
        .doc(`${uid}`)
        .get()
        .then(doc => {
            if (doc.exists) {
                //Get the users saved jobs and save to global state
                console.log('Found User. Getting Saved Jobs');
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
                                link: '',
                                name: 'Your First Saved Job!',
                                createDate: new Date(),
                                status: 'new',
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
