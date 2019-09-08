import React from 'react';
import { useStateValue } from '../../state';
import _ from 'lodash';

import styled from 'styled-components';
import { Header, Segment, Menu } from 'semantic-ui-react';
import SavedJobs from './components/SavedJobs';
import Profile from './components/Profile';

import { Route, Link } from 'react-router-dom';

const ProfileContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
`;

const StyledUserNav = styled(Segment)`
    display: flex;
    flex-direction: row;
`;

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7px;
`;

const UserImage = styled.img`
    border-radius: 20px;
    min-width: 40px;
    height: 40px;
`;

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
                            <UserImage src={user.photo} />
                        </Menu.Item>
                        <Menu.Item as={Link} to="/me">
                            Saved Jobs
                        </Menu.Item>
                    </Menu>
                    <Route exact path="/me" component={SavedJobs} />
                    <Route exact path="/me/profile" component={Profile} />
                </div>
            )}
        </ProfileContainer>
    );
};

export default User;
