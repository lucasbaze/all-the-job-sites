import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Header, Segment, Form, Icon, Dropdown } from 'semantic-ui-react';

const SavedJobs = props => {
    const [jobLink, setJobLink] = useState('');
    const [savedJobs, setSavedJobs] = useState([]);

    const handleChange = e => {
        setJobLink(e.target.value);
    };

    const handleSubmit = () => {
        axios.post('/api/jobs', { jobLink: jobLink });

        //Just add the job link to the saved jobs so it displays in the list
        setSavedJobs([
            ...savedJobs,
            { link: jobLink, status: 'new', created: new Date() },
        ]);

        setJobLink('');
    };

    useEffect(() => {
        axios
            .get('/api/jobs')
            .then(response => {
                if (!response.status == 200) {
                    throw new Error('Failed to fetch the saved Jobs');
                }
                return response.data;
            })
            .then(data => {
                setSavedJobs(data);
            })
            .catch(err => console.log(err));
    }, []);

    let options = [
        {
            key: 'new',
            text: 'New',
            value: 'new',
        },
        {
            key: 'applied',
            text: 'Applied',
            value: 'applied',
        },
        {
            key: 'archived',
            text: 'Archived',
            value: 'archived',
        },
    ];

    return (
        <div>
            <Header as="h1" content="Add Job" style={{ marginBottom: 10 }} />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Field
                        style={{
                            flex: 1,
                        }}
                    >
                        <input
                            name="jobLink"
                            type="text"
                            value={jobLink}
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
            <Header as="h1" content="Saved Jobs" />
            {savedJobs.map(job => {
                let jobLink = job.link.substring(8, 35).concat('...');
                return (
                    <Segment
                        style={{
                            marginBottom: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <a href={job.link} target="_blank">
                            {jobLink}
                        </a>
                        <Dropdown
                            selection
                            value={job.status}
                            options={options}
                        />
                        <Icon name="external" color="blue" />
                    </Segment>
                );
            })}
        </div>
    );
};

export default SavedJobs;
