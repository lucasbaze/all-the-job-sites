import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useStateValue } from '../../../state';

import styled from 'styled-components';
import { Header, Form } from 'semantic-ui-react';

import SavedJobsTable from './SavedJobsTable';
import AddJob from '../../../components/AddJob';

const SavedJobs = props => {
    const [{ savedJobs }, dispatch] = useStateValue();

    return (
        <>
            <AddJob />
            <SavedJobsTable savedJobs={savedJobs.savedJobs} />
        </>
    );
};

export default SavedJobs;
