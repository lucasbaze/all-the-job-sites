import React, { useState } from 'react';
//import axios from 'axios';

//Components
import { Header, Form, Segment } from 'semantic-ui-react';

//CSS
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
`;

const AddJob = ({ action }) => {
    // const [jobToSave, setJobToSave] = useState({
    //     name: '',
    //     link: ''
    // });
    const [jobLink, setJobLink] = useState('');

    const handleChange = e => {
        //setJobToSave({...jobToSave, [e.target.name] : e.target.value});
        setJobLink(e.target.value);
    };

    const handleSubmit = () => {
        //axios.post('/api/jobs', { jobLink: jobLink });
        //Just add the job link to the saved jobs so it displays in the list
        // action([
        //     { link: jobLink, status: 'new', created: new Date() },
        //     ...savedJobs,
        // ]);
        //setJobLink('');
    };

    return (
        <div>
            <Header as="h1" content="Add Jobs" />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Field style={{ flex: 1 }}>
                        <input
                            name="link"
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
        </div>
    );
};

export default AddJob;
