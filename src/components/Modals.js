import React, { useState, useEffect } from 'react';

import { Modal, Header, Tab, Button } from 'semantic-ui-react';

export const AboutUs = ({ open, setOpen }) => {
    return (
        <Modal
            size="tiny"
            open={open}
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'close about us',
                });
            }}
            closeIcon
        >
            <Header as="h2" icon="thumbs up outline" content="Welcome!" />
            <Modal.Content>
                <p>All The Job Sites is built by AllTheJobSites, Inc.</p>
                <p>
                    The motivation of this site is to make job search easier.
                    There are hundreds of job boards and finding all the jobs is
                    a nightmare. All The Job Sites is the #1 place to make all
                    of this easier.
                </p>
                <p>
                    The team currently consists of{' '}
                    <a href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/">
                        Lucas Bazemore
                    </a>{' '}
                    and{' '}
                    <a href="https://www.linkedin.com/in/cameronskelley/">
                        Cameron Kelley
                    </a>
                    .
                </p>
            </Modal.Content>
        </Modal>
    );
};

export const LoginSignup = ({ open, setOpen, authLogin, selectedIndex }) => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        setIndex(selectedIndex);
    }, [selectedIndex]);

    const panes = [
        {
            menuItem: 'Login',
            render: () => (
                <Tab.Pane>
                    <Button
                        color="google plus"
                        content="Login with Google"
                        onClick={() => {
                            authLogin();
                            window.gtag('event', 'login', {
                                event_category: 'user',
                                event_label: 'login with google',
                            });
                        }}
                    />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Sign Up',
            render: () => (
                <Tab.Pane>
                    <Button
                        color="google plus"
                        content="Sign Up with Google"
                        onClick={() => {
                            authLogin();
                            window.gtag('event', 'signup', {
                                event_category: 'user',
                                event_label: 'signup with google',
                            });
                        }}
                    />
                </Tab.Pane>
            ),
        },
    ];

    return (
        <Modal
            size="tiny"
            open={open}
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'close login signup',
                });
            }}
            closeIcon
        >
            <Modal.Content>
                <Tab
                    panes={panes}
                    activeIndex={index}
                    onTabChange={data => setIndex(data.activeIndex)}
                />
            </Modal.Content>
        </Modal>
    );
};
