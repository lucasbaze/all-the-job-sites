import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import firebase from '../../../firebase';

//State
import { useStateValue } from '../../../state';
import * as preferenceActions from '../../../reducers/preferencesReducer';
import * as userActions from '../../../reducers/userReducer';

//Components
import {
    Header,
    Segment,
    Label,
    Form,
    Input,
    Icon,
    Grid,
    Button,
} from 'semantic-ui-react';

//Hooks
import { useForm } from '../../../hooks';

const Profile = () => {
    const [{ user, preferences }, dispatch] = useStateValue();

    const submitHandler = values => {
        preferenceActions.addPreference(
            dispatch,
            preferences,
            values,
            user.uid
        );
    };

    const [locationValue, handleLocationChange, handleLocationSubmit] = useForm(
        { location: '' },
        submitHandler
    );
    const [roleValue, handleRoleChange, handleRoleSubmit] = useForm(
        { role: '' },
        submitHandler
    );
    const [skillValue, handleSkillChange, handleSkillSubmit] = useForm(
        { skill: '' },
        submitHandler
    );
    const [industryValue, handleIndustryChange, handleIndustrySubmit] = useForm(
        { industry: '' },
        submitHandler
    );

    useEffect(() => {
        console.log('line 55 profile');
    }, []);

    const handleDelete = item => {
        preferenceActions.deletePreference(
            dispatch,
            preferences,
            item,
            user.uid
        );
    };

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
                                {preferences.location &&
                                    preferences.location.map(item => {
                                        return (
                                            <Label>
                                                {item}
                                                <Icon
                                                    name="delete"
                                                    onClick={() =>
                                                        handleDelete({
                                                            location: item,
                                                        })
                                                    }
                                                />
                                            </Label>
                                        );
                                    })}
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Grid divided stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
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
                                {preferences.role &&
                                    preferences.role.map(item => {
                                        return (
                                            <Label>
                                                {item}
                                                <Icon
                                                    name="delete"
                                                    onClick={() =>
                                                        handleDelete({
                                                            role: item,
                                                        })
                                                    }
                                                />
                                            </Label>
                                        );
                                    })}
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Grid divided stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
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
                                {preferences.skill &&
                                    preferences.skill.map(item => {
                                        return (
                                            <Label>
                                                {item}
                                                <Icon
                                                    name="delete"
                                                    onClick={() =>
                                                        handleDelete({
                                                            skill: item,
                                                        })
                                                    }
                                                />
                                            </Label>
                                        );
                                    })}
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Grid divided stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as="h3" content="Industries" />
                            <Form onSubmit={handleIndustrySubmit}>
                                <Form.Group>
                                    <Form.Field style={{ flex: 1 }}>
                                        <input
                                            name="industry"
                                            placeholder="Startups, VR, Real Estate"
                                            onChange={handleIndustryChange}
                                            value={industryValue.industry}
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
                                {preferences.industry &&
                                    preferences.industry.map(item => {
                                        return (
                                            <Label>
                                                {item}
                                                <Icon
                                                    name="delete"
                                                    onClick={() =>
                                                        handleDelete({
                                                            industry: item,
                                                        })
                                                    }
                                                />
                                            </Label>
                                        );
                                    })}
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Button
                color="red"
                basic
                compact
                onClick={() =>
                    firebase
                        .auth()
                        .signOut()
                        .then(function() {
                            // Sign-out successful.
                            window.localStorage.removeItem('loading');
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
