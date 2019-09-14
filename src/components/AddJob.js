import React, { useState } from 'react';
//import axios from 'axios';

//State
import * as jobsActions from '../reducers/jobsReducer';
import { useStateValue } from '../state';

//Components
import { Header, Form, Segment } from 'semantic-ui-react';

//CSS
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const AddJob = () => {
    const [{ savedJobs, user }, dispatch] = useStateValue();
    const [job, setJob] = useState({
        name: '',
        link: '',
    });

    const handleChange = e => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        jobsActions.addNewSavedJob(dispatch, savedJobs, job, user.uid);
        setJob({
            name: '',
            link: '',
        });
    };

    return (
        <>
            <Header as="h1" content="Add Jobs" />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Field style={{ flex: 1 }}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Job Name"
                            value={job.name}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field style={{ flex: 2 }}>
                        <input
                            name="link"
                            type="text"
                            placeholder="Job Link"
                            value={job.link}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Button
                        type="submit"
                        color="green"
                        content="Save Job Link"
                    />
                </Form.Group>
            </Form>
        </>
    );
};

export default AddJob;
