import React from 'react';
import { useStateValue } from '../../state';
import _ from 'lodash';
import firebase from '../../firebase';

import styled from 'styled-components';
import { Header, Segment, Menu, Button } from 'semantic-ui-react';
import SavedJobs from './components/SavedJobs';
import Profile from './components/Profile';

import { Link, Route } from 'react-router-dom';

//Styles / Styled Components
import { UserImage, ProfileContainer } from './Styled';

const User = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <ProfileContainer>
            {_.isEmpty(user) ? (
                <Header as="h1" content="Please Login" />
            ) : (
                <div>
                    <Menu>
                        <Menu.Item as={Link} to="/me/profile">
                            <UserImage src={user.photoURL} />
                        </Menu.Item>
                        <Menu.Item as={Link} to="/me">
                            Saved Jobs
                        </Menu.Item>
                        <Menu.Item
                            as={Button}
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
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Button
                                    color="red"
                                    onClick={() => alert('clicked')}
                                >
                                    Find Jobs For Me
                                </Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Route exact path="/me" component={SavedJobs} />
                    <Route exact path="/me/profile" component={Profile} />
                </div>
            )}
        </ProfileContainer>
    );
};

export default User;
