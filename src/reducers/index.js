import searchReducer from './searchReducer';
import userReducer from './userReducer';
import jobsReducer from './jobsReducer';
import {
    SET_USER,
    UPDATE_SEARCH,
    SET_USER_JOBS,
    UPDATE_SAVED_JOBS,
    ADD_SAVED_JOB,
    DELETE_SAVED_JOB,
} from '../actions/types';

export const mainReducer = ({ user, searchValue, savedJobs }, action) => ({
    searchValue: searchReducer(searchValue, action),
    user: userReducer(user, action),
    savedJobs: jobsReducer(savedJobs, action),
});
//
// export const reducer = (state, action) => {
//     switch (action.type) {
//         case UPDATE_SEARCH:
//             let cleanedSearch = action.payload.replace(/[^a-zA-Z 0-9]/g, '');
//
//             return {
//                 ...state,
//                 searchValue: cleanedSearch,
//             };
//
//         case SET_USER:
//             return {
//                 ...state,
//                 user: action.payload || null,
//             };
//
//         case SET_USER_JOBS:
//             return {
//                 ...state,
//                 savedJobs: action.payload || null,
//             };
//
//         case ADD_SAVED_JOB:
//             return {
//                 ...state,
//                 savedJobs: action.payload || null,
//             };
//
//         case UPDATE_SAVED_JOBS:
//             return {
//                 ...state,
//                 savedJobs: action.payload || null,
//             };
//
//         case DELETE_SAVED_JOB:
//             return {
//                 ...state,
//                 savedJobs: action.payload || null,
//             };
//
//         default:
//             return state;
//     }
// };
