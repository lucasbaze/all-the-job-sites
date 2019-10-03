import React, { useState } from 'react';

//State
import * as jobsActions from '../reducers/jobsReducer';
import * as userActions from '../reducers/userReducer';
import { useStateValue } from '../state';

//Components
import { Header, Form, Responsive, Message } from 'semantic-ui-react';

//CSS
import styled from 'styled-components';

const AddJob = ({ display = true, setOpen }) => {
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
        if (setOpen) {
            setOpen(false);
        }
    };

    return (
        <>
            {display ? <Header as="h1" content="Add Job" /> : null}
            {!user.onboardComplete ? (
                <Message
                    positive
                    onDismiss={() => {
                        userActions.onboardComplete(dispatch, user);

                        window.gtag('event', 'dismiss', {
                            event_category: 'user',
                            event_label: 'onobarding complete',
                        });
                    }}
                >
                    <strong>Copy and Paste</strong> the Link of{' '}
                    <strong>ANY job</strong> on <strong>ANY site</strong> and{' '}
                    <strong>Save it here!</strong>
                </Message>
            ) : null}
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
                        onClick={() => {
                            window.gtag('event', 'save job', {
                                event_category: 'user',
                                event_label: 'save job mobile',
                            });
                        }}
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
                        onClick={() => {
                            window.gtag('event', 'save job', {
                                event_category: 'user',
                                event_label: 'save job desktop',
                            });
                        }}
                    />
                </Responsive>
            </Form>
        </>
    );
};

export default AddJob;
