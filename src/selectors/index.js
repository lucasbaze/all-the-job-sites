import React from 'react';
import { useStateValue } from '../state';

export const TotalJobsSelector = () => {
    const [{ savedJobs }, dispatch] = useStateValue();
    let totalSavedJobs = savedJobs && savedJobs.length && savedJobs.length;
    return <>{totalSavedJobs}</>;
};
