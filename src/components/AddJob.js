import React, { useState } from 'react';

//State
import * as jobsActions from '../reducers/jobsReducer';
import { useStateValue } from '../state';

//Components
import { Header, Form, Responsive } from 'semantic-ui-react';

//CSS
import styled from 'styled-components';

const AddJob = ({ display = true }) => {
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
            {display ? <Header as="h1" content="Add Jobs" /> : null}
            <Form onSubmit={handleSubmit}>
                {/*
                    Mobile
                    */}
                <Responsive maxWidth={767}>
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
                </Responsive>
                {/*
                    Desktop
                    */}
                <Responsive as={Form.Group} minWidth={768}>
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
                </Responsive>
            </Form>
        </>
    );
};

export default AddJob;
