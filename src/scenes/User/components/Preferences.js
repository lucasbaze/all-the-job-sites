import React from 'react';

//Components
import { Header, Segment, Form, Grid, Label } from 'semantic-ui-react';

//Hooks
import { useForm } from '../../../hooks';

const Preferences = () => {
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

    return (
        <>
            <Header as="h1" content="Preferences" />
            <Segment>
                <Grid divided>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header as="h3" content="Locations" />
                            <Form onSubmit={handleLocationSubmit}>
                                <Form.Group>
                                    <Form.Input
                                        name="location"
                                        placeholder="Remote, Austin, Seattle"
                                        onChange={handleLocationChange}
                                        value={locationValue.location}
                                    />
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
                        <Form.Input
                            name="role"
                            placeholder="Engineer, Nurse, Paralegal"
                            onChange={handleRoleChange}
                            value={roleValue.role}
                        />
                        <Form.Button type="submit" color="purple" icon="plus" />
                    </Form.Group>
                </Form>
            </Segment>
            <Segment>
                <Header as="h3" content="Skills" />
                <Form onSubmit={handleSkillSubmit}>
                    <Form.Group>
                        <Form.Input
                            name="skill"
                            placeholder="React Native, Adobe XD, Excel"
                            onChange={handleSkillChange}
                            value={skillValue.skill}
                        />
                        <Form.Button type="submit" color="purple" icon="plus" />
                    </Form.Group>
                </Form>
            </Segment>
        </>
    );
};

export default Preferences;
