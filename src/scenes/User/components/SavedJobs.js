import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import styled from 'styled-components';
import { Header, Form } from 'semantic-ui-react';

import SavedJobsTable from './SavedJobsTable';
import AddJob from '../../../components/AddJob';

const Container = styled.div`
    width: 100%;
`;

const SavedJobs = props => {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        // axios
        //     .get('/api/jobs')
        //     .then(response => {
        //         if (!response.status == 200) {
        //             throw new Error('Failed to fetch the saved Jobs');
        //         }
        //         return response.data;
        //     })
        //     .then(data => {
        //         setSavedJobs(data);
        //     })
        //     .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <AddJob />
            <Header as="h1" content="Saved Jobs" />
            <SavedJobsTable savedJobs={savedJobs} />
        </Container>
    );
};

export default SavedJobs;
