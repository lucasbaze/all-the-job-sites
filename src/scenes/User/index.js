import React from 'react';
import { useStateValue } from '../../state';
import _ from 'lodash';

//Components
import { Route, Link } from 'react-router-dom';
import { Header, Menu, Button } from 'semantic-ui-react';
import SavedJobs from './components/SavedJobs';
import Profile from './components/Profile';
import Preferences from './components/Preferences';

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
                        <Menu.Item as={Link} to="/me/preferences">
                            Preferences
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Button color="red">
                                    Find Jobs For Me ($29)
                                </Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Route exact path="/me" component={SavedJobs} />
                    <Route exact path="/me/profile" component={Profile} />
                    <Route
                        exact
                        path="/me/preferences"
                        component={Preferences}
                    />
                </div>
            )}
        </ProfileContainer>
    );
};

export default User;
