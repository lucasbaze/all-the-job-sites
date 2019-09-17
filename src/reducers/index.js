import searchReducer from './searchReducer';
import userReducer from './userReducer';
import jobsReducer from './jobsReducer';
import categoryReducer from './categoryReducer';

export const mainReducer = (
    { user, searchValue, savedJobs, category },
    action
) => ({
    //Middleware goes here, i.e. calling analytics, etc..

    searchValue: searchReducer(searchValue, action),
    user: userReducer(user, action),
    savedJobs: jobsReducer(savedJobs, action),
    category: categoryReducer(category, action),
});
