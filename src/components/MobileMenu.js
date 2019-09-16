import React, { useState } from 'react';
import styled from 'styled-components';

import {
    Header,
    Input,
    Button,
    Segment,
    Image,
    Responsive,
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
    background-color: red;
    padding: 50px 0px;
`;

export const MobileMenu = ({ children, ...rest }) => {
    const [open, setOpen] = useState(true);

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
                            to="/"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Home</h2>
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            to="/contact-us"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Contact us</h2>
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            to="/post-job"
                            onClick={() => setOpen(false)}
                        >
                            <h2>Post Job</h2>
                        </Menu.Item>
                    </Menu>
                </MenuContainer>
            </Sidebar>
            <Sidebar.Pusher>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};
