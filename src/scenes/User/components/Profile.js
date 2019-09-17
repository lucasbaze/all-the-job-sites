import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import firebase from '../../../firebase';

//State
import { useStateValue } from '../../../state';
import * as userActions from '../../../reducers/userReducer';

//Components
import {
    Header,
    Segment,
    Label,
    Form,
    Input,
    Grid,
    Button,
} from 'semantic-ui-react';

//Hooks
import { useForm } from '../../../hooks';

const Profile = () => {
    const [{ user, preferences }, dispatch] = useStateValue();
    const [locationValue, handleLocationChange, handleLocationSubmit] = useForm(
        { location: '' },
        console.log
    );
    const [roleValue, handleRoleChange, handleRoleSubmit] = useForm(
        { role: '' },
        console.log
    );
    const [skillValue, handleSkillChange, handleSkillSubmit] = useForm(
        { skill: '' },
        console.log
    );

    useEffect(() => {
        if (preferences && !_.isEmpty(preferences)) {
            userActions.getUserPreferences(dispatch, user);
        }
    }, []);

    return (
        <>
            <Header as="h1" content={user.displayName} />
            <p>{user.email}</p>
            <Header as="h1" content="Preferences" />
            <p>
                This helps us and recruiters find you. The more you include, the
                better the results.
            </p>
            <Segment>
                <Grid divided stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as="h3" content="Locations" />
                            <Form onSubmit={handleLocationSubmit}>
                                <Form.Group>
                                    <Form.Field style={{ flex: 1 }}>
                                        <input
                                            name="location"
                                            placeholder="Remote, Austin, Seattle"
                                            onChange={handleLocationChange}
                                            value={locationValue.location}
                                        />
                                    </Form.Field>
                                    <Form.Button
                                        type="submit"
                                        color="purple"
                                        icon="plus"
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Label.Group size="medium">
                                <Label content="Austin, TX" />
                                <Label content="Dallas, TX" />
                                <Label content="Seattle" />
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Header as="h3" content="Roles" />
                <Form onSubmit={handleRoleSubmit}>
                    <Form.Group>
                        <Form.Field style={{ flex: 1 }}>
                            <input
                                name="role"
                                placeholder="Engineer, Nurse, Paralegal"
                                onChange={handleRoleChange}
                                value={roleValue.role}
                            />
                        </Form.Field>
                        <Form.Button type="submit" color="purple" icon="plus" />
                    </Form.Group>
                </Form>
            </Segment>
            <Segment>
                <Header as="h3" content="Skills" />
                <Form onSubmit={handleSkillSubmit}>
                    <Form.Group>
                        <Form.Field style={{ flex: 1 }}>
                            <input
                                name="skill"
                                placeholder="React Native, Adobe XD, Excel"
                                onChange={handleSkillChange}
                                value={skillValue.skill}
                            />
                        </Form.Field>
                        <Form.Button type="submit" color="purple" icon="plus" />
                    </Form.Group>
                </Form>
            </Segment>
            <Button
                color="Logout"
                basic
                onClick={() =>
                    firebase
                        .auth()
                        .signOut()
                        .then(function() {
                            // Sign-out successful.
                            window.location.reload();
                        })
                        .catch(function(error) {
                            console.error(error);
                            // An error happened.
                            // window.location.reload();
                        })
                }
            >
                Logout
            </Button>
        </>
    );
};

export default Profile;
