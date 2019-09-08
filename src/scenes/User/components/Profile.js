import React, { useState } from 'react';

//State
import { useStateValue } from '../../../state';

//Components
import { Header, Segment, Label, Form, Input, Grid } from 'semantic-ui-react';

const Profile = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <Segment>
            <Header as="h1" content={user.displayName} />
            <p>{user.email}</p>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>Locations</label>
                                <input placeholder="Remote, Austin, Seattle" />
                            </Form.Field>
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
        </Segment>
    );
};

export default Profile;
