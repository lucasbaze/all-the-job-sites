import React, { useState } from 'react';

//State
import { useStateValue } from '../../../state';

//Components
import { Header, Segment, Label, Form, Input, Grid } from 'semantic-ui-react';

//Hooks
import { useForm } from '../../../hooks';

const Profile = () => {
    const [{ user }, dispatch] = useStateValue();
    const [locationValue, handleLocationChange, handleLocationSubmit] = useForm(
        '',
        console.log
    );

    return (
        <>
            <Header as="h1" content={user.displayName} />
            <p>{user.email}</p>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Form onSubmit={handleLocationSubmit}>
                            <Form.Group>
                                <Form.Input
                                    label="locations"
                                    name="location"
                                    placeholder="Remote, Austin, Seattle"
                                    onChange={handleLocationChange}
                                    value={locationValue.location}
                                />
                                <Form.Button color="purple" icon="plus" />
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>Roles</label>
                                <input placeholder="Engineer, Nurse, Paralegal" />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>Skills</label>
                                <input placeholder="React Native, Adobe XD, Excel" />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Profile;
