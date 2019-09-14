import firebase from '../firebase.js';
import _ from 'lodash';

//
//CONFIG
//

const db = firebase.firestore();

//
// CONSTANTS
//

export const SET_USER_JOBS = 'atjs/jobs/set_user_jobs';
export const UPDATE_SAVED_JOBS = 'atjs/jobs/update_saved_jobs';
export const ADD_SAVED_JOB = 'atjs/jobs/add_saved_job';
export const DELETE_SAVED_JOB = 'atjs/jobs/delete_saved_job';

//
//REDUCER
//
export default function jobsReducer(state, action) {
    switch (action.type) {
        case SET_USER_JOBS:
            return action.payload;

        case ADD_SAVED_JOB:
            return action.payload;

        case UPDATE_SAVED_JOBS:
            return action.payload;

        case DELETE_SAVED_JOB:
            return action.payload;
        default:
            return state;
    }
}

//
// ACTION CREATORS
//

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

export const deleteSavedJob = (dispatch, uid, savedJobs, key) => {
    console.log('deleting job from state');

    _.remove(savedJobs, job => {
        return job.key == key;
    });

    //console.log(savedJobs);
    dispatch({
        type: DELETE_SAVED_JOB,
        payload: savedJobs,
    });

    //Remove everything before saved_jobs/ from key
    //key is the document path
    //key looks like users/wD0GWSkyezNfAPQxgr8IjwMfP583/saved_jobs/VuGJ5M69AwyCHjoMese
    let jobKey = key.substring(key.indexOf('saved_jobs/') + 11);

    console.log(jobKey);
    console.log('deleting job from db');
    db.collection('users')
        .doc(`${uid}`)
        .collection('saved_jobs')
        .doc(`${jobKey}`)
        .delete()
        .then(() => {
            console.log('Job Succesfully deleted');
        })
        .catch(err => {
            console.error('Error deleting job: ', err);
        });
};
