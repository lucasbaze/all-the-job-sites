import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useStateValue } from '../../../state';

import styled from 'styled-components';
import { Header, Form } from 'semantic-ui-react';

import SavedJobsTable from './SavedJobsTable';
import AddJob from '../../../components/AddJob';

const Container = styled.div`
    width: 100%;
`;

const SavedJobs = props => {
    const [{ savedJobs }, dispatch] = useStateValue();

    return (
        <Container>
            <AddJob />
            <Header as="h1" content="Saved Jobs" />
            <SavedJobsTable savedJobs={savedJobs} />
        </Container>
    );
};

export default SavedJobs;
