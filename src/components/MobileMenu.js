import React, { useState } from 'react';
import styled from 'styled-components';
import { flexBoxMixin } from '../globals/styles';
import _ from 'lodash';

//State
import { useStateValue } from '../state';

//Selectors
import { TotalJobsSelector } from '../selectors';

import {
    Header,
    Input,
    Button,
    Segment,
    Image,
    Responsive,
    Icon,
    Menu,
    Label,
    Sidebar,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginSignupButtons from './LoginSignupButtons';
import AddJob from './AddJob';

const MenuContainer = styled.div`
    ${flexBoxMixin('column', 'flex-start', 'center')}
    background-color: white;
    padding: 20px 20px;
    height: 100vh;
`;

export const MobileMenu = ({ children, ...rest }) => {
    const [{ user, savedJobs }, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    let childComponents = React.Children.toArray(children);

    childComponents = [
        React.cloneElement(childComponents[0], { setOpen: setOpen }),
    ].concat(childComponents.slice(1));

    return (
        <Sidebar.Pushable>
            <Sidebar
                animation="overlay"
                visible={open}
                onHide={() => setOpen(false)}
                horizontal
                direction="top"
                style={{
                    zIndex: 9999,
                    overflow: 'visible',
                }}
            >
                <MenuContainer>
                    <Icon
                        name="delete"
                        size="large"
                        style={{ alignSelf: 'flex-end' }}
                        onClick={() => setOpen(false)}
                    />
                    <Menu
                        secondary
                        vertical
                        fluid
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <Menu.Item
                            as={Link}
                            to="/home"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Home</h2>
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            to="/"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Site Search</h2>
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            to="/contact-us"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Contact us</h2>
                        </Menu.Item>
                        {user ? (
                            <Menu.Item
                                as={Link}
                                to="/me"
                                onClick={() => setOpen(false)}
                            >
                                <h2>
                                    My Profile
                                    <Label
                                        color="red"
                                        circular
                                        style={{
                                            marginLeft: 8,
                                            paddingBottom: 5,
                                            marginBottom: 5,
                                        }}
                                    >
                                        <TotalJobsSelector />
                                    </Label>
                                </h2>
                            </Menu.Item>
                        ) : (
                            <LoginSignupButtons />
                        )}
                        <Menu.Item
                            as={Link}
                            to="/post-job"
                            onClick={() => setOpen(false)}
                        >
                            <Button color="red" size="large">
                                Post Job
                            </Button>
                        </Menu.Item>
                        {!_.isEmpty(user) ? (
                            <Menu.Item>
                                <AddJob display={false} />
                            </Menu.Item>
                        ) : null}
                    </Menu>
                </MenuContainer>
            </Sidebar>
            <Sidebar.Pusher>{childComponents}</Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};
