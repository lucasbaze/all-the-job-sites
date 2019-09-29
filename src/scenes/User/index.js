import React from 'react';
import { useStateValue } from '../../state';
import _ from 'lodash';
import firebase from '../../firebase';

import styled from 'styled-components';
import {
    Header,
    Segment,
    Menu,
    Button,
    Responsive,
    Icon,
} from 'semantic-ui-react';
import SavedJobs from './components/SavedJobs';
import Profile from './components/Profile';

import { FindJobsForMeModal } from '../../components/Modals';

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
                    {/*
                            Mobile
                        */}
                    <Responsive as={Menu} maxWidth={767}>
                        <Menu.Item as={Link} to="/me/profile">
                            <UserImage src={user.photoURL} />
                            <Icon
                                name="ellipsis vertical"
                                style={{ marginLeft: 10 }}
                            />
                        </Menu.Item>
                        <Menu.Item as={Link} to="/me">
                            Saved Jobs
                        </Menu.Item>
                        <Menu.Item
                            as={Button}
                            onClick={() => alert('clicked')}
                            width={4}
                        >
                            Find Jobs For Me
                        </Menu.Item>
                    </Responsive>
                    {/*
                            Desktop
                        */}
                    <Responsive as={Menu} minWidth={768}>
                        <Menu.Item as={Link} to="/me/profile">
                            <UserImage src={user.photoURL} />
                            <Icon
                                name="ellipsis vertical"
                                style={{ marginLeft: 10 }}
                            />
                        </Menu.Item>
                        <Menu.Item as={Link} to="/me">
                            Saved Jobs
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <FindJobsForMeModal />
                            </Menu.Item>
                        </Menu.Menu>
                    </Responsive>

                    <Route exact path="/me" component={SavedJobs} />
                    <Route exact path="/me/profile" component={Profile} />
                </div>
            )}
        </ProfileContainer>
    );
};

export default User;
